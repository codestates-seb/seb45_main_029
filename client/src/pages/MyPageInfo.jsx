import { useEffect, useRef, useState } from 'react';
import MyPageNav from '../components/MyPageNav';
import WarningMessage from '../components/WarningMessage';
import BodyAndJobList from '../components/BodyAndJobList';
import {
  NavAndContent,
  NavContainer,
  OuterContainer,
  UserInfoContainer,
  UserInfoInnerContainer,
  TitleAndPic,
  TitleContainer,
  InfoTitle,
  ImgContainer,
  UserImg,
  Line,
  PainChoice,
  EditButtonContainer,
  EditButton,
  InputButton,
  LabelForInput,
  PainListContainer,
  PainSpan,
  WarningP,
  InputDesign,
  JobChoice,
} from '../style/MyPageInfo';
import { checkBoxListBody, checkBoxListJob } from '../assets/constantValues';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, updateUser } from '../redux/userSlice';
import { jobChoose } from '../assets/variousFunctions';

export default function MyPageInfo() {
  const [imgFile, setImgFile] = useState('');
  const [checkedList, setCheckedList] = useState([]);
  const [checkedListJob, setCheckedListJob] = useState('');
  const [nickname, setNickname] = useState('');
  const [nickNameIsValid, setNickNameIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [motto, setMotto] = useState('');
  const [mottoIsValid, setMottoIsValid] = useState(false);
  const imgRef = useRef();
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem('info'));
    if (info) dispatch(setUser(info));
  }, [dispatch]);

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
      };
    } catch {
      alert('에러가 발생하였습니다. 다시 시도해주세요.');
    } finally {
      console.log('처리완료');
    }
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    if (
      e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{10,}$/)
    ) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const nickNameChangeHandler = (e) => {
    setNickname(e.target.value);
    if (e.target.value.length > 0) {
      setNickNameIsValid(true);
    } else {
      setNickNameIsValid(false);
    }
  };

  const mottoChangeHandler = (e) => {
    setMotto(e.target.value);
    if (e.target.value.length > 0) {
      setMottoIsValid(true);
    } else {
      setMottoIsValid(false);
    }
  };

  const buttonOnclickHandler = async () => {
    if (
      !nickNameIsValid ||
      !passwordIsValid ||
      !mottoIsValid ||
      checkedList.length === 0 ||
      checkedListJob === ''
    ) {
      return;
    }

    const data = {
      nickname,
      password,
      motto,
      painArea: checkedList,
      job: checkedListJob,
      image: imgFile,
    };

    try {
      await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/users/mypage/edit/${
          userInfo.userId
        }`,
        data,
        { headers: { Authorization: `Bearer ${userInfo.accessToken}` } }
      );
      dispatch(updateUser(data));
    } catch (err) {
      console.log(err);
    }
  };

  const checkedItemHandler = (value, isChecked, type) => {
    if (isChecked) {
      if (type === 'body') {
        setCheckedList((prev) => [...prev, value].sort());
      } else {
        jobChoose(value, setCheckedListJob);
      }
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      if (type === 'body') {
        setCheckedList(checkedList.filter((item) => item !== value));
      }
    }
  };

  const checkHandler = (e, value, type) => {
    checkedItemHandler(value, e.target.checked, type);
  };

  return (
    <NavAndContent>
      <NavContainer>
        <MyPageNav color='second' />
      </NavContainer>
      <OuterContainer>
        <article>
          <UserInfoContainer>
            <UserInfoInnerContainer>
              <TitleAndPic>
                <TitleContainer>
                  <InfoTitle>회원정보 수정</InfoTitle>
                </TitleContainer>
                <ImgContainer>
                  <UserImg src={imgFile ? imgFile : '/images/person.jpg'} />
                  <LabelForInput>
                    수정
                    <InputButton
                      type='file'
                      accept='image/*'
                      onChange={saveImgFile}
                      ref={imgRef}
                    />
                  </LabelForInput>
                </ImgContainer>
              </TitleAndPic>
              <p>이메일:</p>
              <InputDesign disabled />
              <WarningP>이메일은 변경하실 수 없습니다.</WarningP>
              <WarningMessage
                inputName='닉네임:'
                changeHandler={nickNameChangeHandler}
                valid={nickNameIsValid}
                message='최소 1글자 이상 입력해주세요!'
              />
              <WarningMessage
                inputName='비밀번호:'
                password='password'
                changeHandler={passwordChangeHandler}
                valid={passwordIsValid}
                message='최소 10자 이상, 영문, 숫자, 특수문자 포함되어야합니다!'
              />
              <WarningMessage
                inputName='좌우명:'
                changeHandler={mottoChangeHandler}
                valid={mottoIsValid}
                message='최소 1글자 이상 입력해주세요!'
              />
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
              <EditButtonContainer>
                <EditButton onClick={buttonOnclickHandler}>수정하기</EditButton>
              </EditButtonContainer>
            </UserInfoInnerContainer>
          </UserInfoContainer>
        </article>
      </OuterContainer>
    </NavAndContent>
  );
}
