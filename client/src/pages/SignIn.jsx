import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import {
  LoginContainer,
  LoginBox,
  Button,
  // MyCustomButton,
} from '../style/SignIn';
import {
  // useGoogleLogin,
  GoogleOAuthProvider,
  GoogleLogin,
} from '@react-oauth/google';
// import GoogleIcon from '../assets/logos_google.svg';
import axios from 'axios';
function SignIn() {
  const [id, setId] = useState('');
  const [idIsValid, setIdIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChangeHandlerId = (e) => {
    setId(e.target.value);
    if (e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setIdIsValid(true);
    } else {
      setIdIsValid(false);
    }
  };
  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 10) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  const signIn = async () => {
    if (idIsValid && passwordIsValid) {
      api('/users/login', 'post', { password, email: id })
        .then((response) => {
          if (response.data) {
            window.localStorage.setItem(
              'info',
              JSON.stringify({
                userId: response.data.userId,
                accessToken: response.data.accessToken,
              })
            );
            dispatch(setUser(response.data));
            navigate('/');
          }
        })
        .catch((error) => {
          // Handle any errors
          console.log('failed to signin');
          console.error('Request error:', error);
          return error;
        });
    }
  };
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => console.log(codeResponse),
  //   flow: 'auth-code',
  // });

  useEffect(() => {
    setLoggedIn(user.loggedIn);
  }, [user]);

  useEffect(() => {
    if (loggedIn) {
      navigate(-1);
    }
  }, [loggedIn, navigate]);

  return (
    <LoginContainer>
      <LoginBox>
        <h2>로그인</h2>
        <section className='input-container'>
          <div className='input-box'>
            <input
              type='text'
              onChange={onChangeHandlerId}
              value={id}
              placeholder='example@email.com'
            ></input>
            {!idIsValid && (
              <p className='error-message'>유효한 이메일을 입력 해주세요.</p>
            )}
          </div>
          <div className='input-box'>
            <input
              type='password'
              onChange={onChangeHandlerPassword}
              value={password}
              placeholder='password'
            ></input>
            {!passwordIsValid && (
              <p className='error-message'>비밀번호를 입력 해주세요.</p>
            )}
          </div>
        </section>
        <div className='buttons'>
          <Button
            onClick={signIn}
            onKeyup={window.event.keyCode == 13 && signIn}
          >
            로그인
          </Button>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            <GoogleLogin
              buttonText='google login'
              onSuccess={async (CredentialResponse) => {
                console.log(CredentialResponse);
                //await axios.post('/', CredentialResponse);
                // 이후의 로직
                navigate('/');
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            ></GoogleLogin>
          </GoogleOAuthProvider>
          {/* <MyCustomButton onClick={() => login()}>
            <span>
              <img src={GoogleIcon} alt='GoogleIcon' />
            </span>
            <span>로그인</span>
          </MyCustomButton> */}
        </div>
      </LoginBox>
    </LoginContainer>
  );
}
export default SignIn;
