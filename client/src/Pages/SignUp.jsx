
import React, { useState } from "react";
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [id, setId] = useState('');
    const [idIsValid, setIdIsValid] = useState(false);
    // const [email, setEmail] = useState('');
    // const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [password2, setPassword2] = useState('');
    const [password2Valid, setPassword2Valid] = useState(false);
    const [name, setName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);

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
  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
    if (
      e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{10,}$/)
    ) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
            
  };
  
  const onChangeHandlerPassword2 = (e) => {
    setPassword2(e.target.value);
    if (e.target.value !== password) {
      setPassword2Valid(false);
    } else {
      setPassword2Valid(true);
    }
  };


    
    const signUp = () => {
        navigate('/signup');
    }

  const 
    
   
  return (

  );

}
export default SignUp;