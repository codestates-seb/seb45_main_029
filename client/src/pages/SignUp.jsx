// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import BodyAndJobList from '../components/BodyAndJobList';
import { useNavigate } from 'react-router-dom';
import {
  SignBox,
  Container,
  PainSpan,
  JobChoice,
  PainListContainer,
  Line,
  PainChoice,
} from '../style/SignUp';
import { Button } from '../style/Button';
import { checkBoxListBody, checkBoxListJob } from '../assets/constantValues';
import { api } from '../api/api';

function SignUp() {
  const [id, setId] = useState('');
  const [idIsValid, setIdIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password2, setPassword2] = useState('');
  const [password2IsValid, setPassword2IsValid] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [nickName, setNickName] = useState('');
  const [nickNameIsValid, setNickNameIsValid] = useState(false);
  const [motto, setMotto] = useState('');
  const [mottoIsValid, setMottoIsValid] = useState(false);

  const [checkedList, setCheckedList] = useState([]);
  const [checkedListJob, setCheckedListJob] = useState('');

  const navigate = useNavigate();

  const onChangeHandlerName = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 1) {
      setUsernameIsValid(false);
    } else {
      setUsernameIsValid(true);
    }
  };

  const onChangeHandlerId = (e) => {
    setId(e.target.value);
    if (e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setIdIsValid(true);
    } else {
      setIdIsValid(false);
    }
  };

  const onChangeHandlerNickName = (e) => {
    setNickName(e.target.value);
    if (e.target.value.length < 1) {
      setNickNameIsValid(false);
    } else {
      setNickNameIsValid(true);
    }
  };

  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
    if (
      e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{10,}$/)
    ) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const onChangeHandlerPassword2 = (e) => {
    setPassword2(e.target.value);
    if (e.target.value !== password) {
      setPassword2IsValid(false);
    } else {
      setPassword2IsValid(true);
    }
  };

  const onChangeHandlerMotto = (e) => {
    setMotto(e.target.value);
    if (e.target.value.length < 1) {
      setMottoIsValid(false);
    } else {
      setMottoIsValid(true);
    }
  };

  const signUp = async () => {
    if (
      idIsValid &&
      passwordIsValid &&
      password2IsValid &&
      usernameIsValid &&
      nickNameIsValid &&
      mottoIsValid
    ) {
      const res = await api('/users/signup', 'post', {
        email: id,
        password,
        username,
        confirmPassword: password2,
        motto,
        nickname: nickName,
        painArea: '가슴',
        job: '사무직',
      });
      console.log(res);
      navigate('/signin');
    }
  };

  const checkedItemHandler = (value, isChecked, type) => {
    if (isChecked) {
      if (type === 'body') {
        setCheckedList((prev) => [...prev, value].sort());
      } else {
        setCheckedListJob(value);
      }
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      if (type === 'body') {
        setCheckedList(checkedList.filter((item) => item !== value));
      } else {
        setCheckedListJob(checkBoxListJob);
      }
    }
  };

  const checkHandler = (e, value, type) => {
    checkedItemHandler(value, e.target.checked, type);
  };

  return (
    <>
      <Container>
        <SignBox>
          <section>
            <h1>회원가입</h1>
            <div>
              <div className='input-container'>
                <div className='title'>이름 :</div>
                <input
                  type='text'
                  onChange={onChangeHandlerName}
                  value={username}
                  placeholder='설미선'
                ></input>
              </div>
              {!usernameIsValid ? (
                <div className='error-message'>이름을 입력 해주세요</div>
              ) : null}
            </div>
            <div>
              <div className='input-container'>
                <div className='title'>이메일 :</div>
                <input
                  type='text'
                  onChange={onChangeHandlerId}
                  value={id}
                  placeholder='example@email.com'
                ></input>
                <button className='btn'>확인</button>
              </div>
              {!idIsValid ? (
                <div className='error-message'>
                  유효한 이메일을 입력 해주세요.
                </div>
              ) : null}
            </div>
            <div>
              <div className='input-container'>
                <div className='title'>닉네임 :</div>
                <input
                  type='text'
                  onChange={onChangeHandlerNickName}
                  value={nickName}
                  placeholder='방구석여포'
                ></input>
              </div>
            </div>
            <div>
              <div className='input-container'>
                <div className='title'>비밀번호 :</div>
                <input
                  type='password'
                  onChange={onChangeHandlerPassword}
                  value={password}
                  placeholder='password'
                ></input>
              </div>
              {!passwordIsValid ? (
                <div className='error-message'>
                  최소 10자 이상, 영문, 숫자, 특수문자 포함되어야합니다!
                </div>
              ) : null}
            </div>
            <div>
              <div className='input-container'>
                <div className='title'>비밀번호 확인 :</div>
                <input
                  type='password'
                  onChange={onChangeHandlerPassword2}
                  value={password2}
                  placeholder='password'
                ></input>
              </div>
              {!password2IsValid ? (
                <div className='error-message'>
                  비밀번호가 일치하지 않습니다.
                </div>
              ) : null}
            </div>
            <div>
              <div className='input-container'>
                <div className='title'>좌우명 :</div>
                <input
                  type='text'
                  onChange={onChangeHandlerMotto}
                  value={motto}
                  placeholder='행동하라'
                ></input>
              </div>
            </div>
          </section>
          <article>
            <PainSpan>직업 분류 : &nbsp; {checkedListJob}</PainSpan>
            <JobChoice>
              <BodyAndJobList
                list={checkBoxListJob}
                name='job'
                type='radio'
                checkHandler={checkHandler}
              />
            </JobChoice>
            <PainListContainer>
              <PainSpan>통증 부위 : &nbsp; </PainSpan>
              {checkedList.length > 0 ? (
                checkedList.map((elem, index) => {
                  return <PainSpan key={index}>{elem}&nbsp;</PainSpan>;
                })
              ) : (
                <></>
              )}
            </PainListContainer>
            <Line />
            <PainChoice>
              <BodyAndJobList
                list={checkBoxListBody}
                name='body'
                type='checkbox'
                checkHandler={checkHandler}
              />
            </PainChoice>
            <Line />
          </article>

          <Button $primay onClick={signUp}>
            가입하기
          </Button>
        </SignBox>
      </Container>
    </>
  );
}
export default SignUp;
