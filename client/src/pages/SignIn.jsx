// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setRecommendedVideosUrl } from '../redux/userSlice';
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
          console.log(response.data);
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
      navigate('/');
    }
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });

  useEffect(() => {
    setLoggedIn(user.loggedIn);
  }, [user]);

  useEffect(() => {
    if (loggedIn) {
      navigate(-1); // 나비효과
      dispatch(setRecommendedVideosUrl('/video/recommended'));
    }
  }, [loggedIn, navigate, dispatch]);

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
          />
        </div>
        {!idIsValid ? (
          <div className='error-message'>유효한 이메일을 입력 해주세요.</div>
        ) : null}
        <form>
          <div className='input-container'>
            <input
              type='password'
              onChange={onChangeHandlerPassword}
              value={password}
              placeholder='password'
              autoComplete='on'
            />
          </div>
          {!passwordIsValid ? (
            <div className='error-message'>비밀번호를 입력 해주세요.</div>
          ) : null}
        </form>
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
