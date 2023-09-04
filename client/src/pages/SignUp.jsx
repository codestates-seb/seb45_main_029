
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CheckboxGroup from "../components/CheckboxGroup";
import Checkbox from "../components/CheckBox";
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { SignBox, Container } from '../style/SignUp';
import { Button } from '../components/Button';
import Header from "../components/Header";
import Footer from "../components/Footer";


function SignUp() {
    const [id, setId] = useState('');
    const [idIsValid, setIdIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [password2, setPassword2] = useState('');
    const [password2IsValid, setPassword2IsValid] = useState(false);
    const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nickName, setNickName] = useState('');
  const [nickNameIsValid, setNickNameIsValid] = useState(false);
  const [motto, setMotto] = useState('');
  const [mottoIsValid, setMottoIsValid] = useState(false);
  const [colors, setColors] = useState(['lightviolet']);

    const navigate = useNavigate();

    


    const onChangeHandlerName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 1) {
          setNameIsValid(false);
        } else {
          setNameIsValid(true);
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
    if (idIsValid && passwordIsValid && password2IsValid && nameIsValid && nickNameIsValid && mottoIsValid) {
      api('/signin', 'post', { id, password })
        .then((response) => {
          console.log(response.data.message);
          if (response.data.success) {
            alert('회원가입에 성공하셨습니다!');
            navigate('/signin');
          }
        })
        .catch((error) => {
          console.log('failed to signUp');
          console.error('Request error:', error);
        });
    }
  };

  
    
   
  return (
    <>
      <Header />
      <Container>
      <SignBox>
      <section>
        <h1>회원가입</h1>
        <div>
              <div className="input-container">
                <div className="title">이름 :</div>
            <input
              type="text"
              onChange={onChangeHandlerName}
              value={name}
              placeholder="설미선"
            ></input>
          </div>
          {!nameIsValid ? (
            <div className="error-message">이름을 입력 해주세요</div>
          ) : null}
        </div>
        <div>
              <div className="input-container">
              <div className="title">이메일 :</div>
            <input
              type="text"
              onChange={onChangeHandlerId}
              value={id}
              placeholder="example@email.com"
                ></input>
                 <button className="btn">확인</button>
          </div>
          {!idIsValid ? (
            <div className="error-message">
              유효한 이메일을 입력 해주세요.
            </div>
          ) : null}
        </div>
        <div>
              <div className="input-container">
              <div className="title">닉네임 :</div>
            <input
              type="text"
              onChange={onChangeHandlerNickName}
              value={nickName}
              placeholder="방구석여포"
            ></input>
          </div>
        </div>
        <div>
          <div className="input-container">
          <div className="title">비밀번호 :</div>
            <input
              type="password"
              onChange={onChangeHandlerPassword}
              value={password}
              placeholder="password"
            ></input>
          </div>
          {!passwordIsValid ? (
            <div className="error-message">
              최소 10자 이상, 영문, 숫자, 특수문자 포함되어야합니다!
            </div>
          ) : null}
        </div>
        <div>
          <div className="input-container">
          <div className="title">비밀번호 확인 :</div>
            <input
              type="password"
              onChange={onChangeHandlerPassword2}
              value={password2}
              placeholder="password"
            ></input>
          </div>
          {!password2IsValid ? (
            <div className="error-message">비밀번호가 일치하지 않습니다.</div>
          ) : null}
        </div>
        <div>
              <div className="input-container">
              <div className="title">좌우명 :</div>
            <input
              type="text"
              onChange={onChangeHandlerMotto}
              value={motto}
              placeholder="행동하라"
            ></input>
          </div>
        </div>


      </section>
      <article>
        <CheckboxGroup label="통증부위는?" values={colors} onChange={setColors}>
          <Checkbox value="chest">가슴</Checkbox>
          <Checkbox value="leg">다리</Checkbox>
          <Checkbox value="back">등</Checkbox>
          <Checkbox value="head">머리</Checkbox>
          <Checkbox value="knee">무릎</Checkbox>
          <Checkbox value="waist">허리</Checkbox>
          <Checkbox value="hand">손</Checkbox>
          <Checkbox value="foot">발</Checkbox>
          <Checkbox value="shoulder">어깨</Checkbox>
          <Checkbox value="arm">팔</Checkbox>
        </CheckboxGroup>
      </article>

          <Button primay onClick={signUp}>
            가입하기
          </Button>
      </SignBox>
      </Container><Footer /></>
  );

}
export default SignUp;