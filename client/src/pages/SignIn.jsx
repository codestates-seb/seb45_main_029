// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import Footer from '../components/Footer';
import { LoginBox, Button, MyCustomButton } from '../style/SignIn';
import { useGoogleLogin } from '@react-oauth/google';

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
          console.log(response.data.message);
          if (response.data.success) {
            dispatch(setUser(response.data));
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
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });
  // const googleLogin = useGoogleLogin({
  //   onSuccess: async (res) => {
  //     console.log(res.access_token);
  //     await axios({
  //       method: "post",
  //       url: "서버 주소",
  //       data: { access_token: res.access_token },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //         })
  //         .catch((e) => console.log(e));
  //   }
  // })

  // const signUp = () => {
  //     navigate('/signup');
  // };

  useEffect(() => {
    setLoggedIn(user.loggedIn);
  }, [user]);

  useEffect(() => {
    if (loggedIn) {
      navigate(-1);
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <LoginBox>
        <h3>로그인</h3>
        <div className='input-container'>
          <input
            type='text'
            onChange={onChangeHandlerId}
            value={id}
            placeholder='example@email.com'
          ></input>
        </div>
        {!idIsValid ? (
          <div className='error-message'>유효한 이메일을 입력 해주세요.</div>
        ) : null}
        <div>
          <div className='input-container'>
            <input
              type='password'
              onChange={onChangeHandlerPassword}
              value={password}
              placeholder='password'
            ></input>
          </div>
          {!passwordIsValid ? (
            <div className='error-message'>비밀번호를 입력 해주세요.</div>
          ) : null}
        </div>
        <div className='buttons'>
          {/* <Button onClick={signUp}>Sign Up</Button> */}
          <Button primary onClick={signIn}>
            로그인
          </Button>
          <MyCustomButton onClick={() => login()}>
            Google 로그인 🚀
          </MyCustomButton>
          ;
        </div>
      </LoginBox>
      <Footer />
    </>
  );
}
export default SignIn;
