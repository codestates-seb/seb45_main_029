import { useRef, useState } from "react";
import MyPageNav from "../components/MyPageNav";
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
} from "../style/MyPageInfo";

const checkBoxList = [
  "가슴",
  "다리",
  "등",
  "머리",
  "무릎",
  "발",
  "손",
  "어깨",
  "팔",
  "허리",
];

export default function MyPageInfo() {
  const [imgFile, setImgFile] = useState("");
  const [checkedList, setCheckedList] = useState([]);
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [motto, setMotto] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
      };
    } catch {
      alert("에러가 발생하였습니다. 다시 시도해주세요.");
    } finally {
      console.log("처리완료");
    }
  };

  const nickNameChangeHandler = (e) => {
    setNickName(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const mottoChangeHandler = (e) => {
    setMotto(e.target.value);
  };

  const buttonOnclickHandler = () => {
    // axios 또는 api 폴더에 있더라고? 거기서 넘겨주기
    const data = { nickName, password, motto };
    console.log(data);
  };

  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value].sort());
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    }
  };

  const checkHandler = (e, value) => {
    checkedItemHandler(value, e.target.checked);
  };

  return (
    <NavAndContent>
      <NavContainer>
        <MyPageNav color="second" />
      </NavContainer>
      <OuterContainer>
        <div>
          <UserInfoContainer>
            <UserInfoInnerContainer>
              <TitleAndPic>
                <TitleContainer>
                  <InfoTitle>회원정보 수정</InfoTitle>
                </TitleContainer>
                <ImgContainer>
                  <UserImg
                    src={
                      imgFile
                        ? imgFile
                        : `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDRANDw0RDg4NDw0ODQ0NDQ8NDg4NFhEWFhYSFhMYHCggGBouGxUTITEhKCkrLy4xFyEzODYsNygtLisBCgoKDg0NFxAPGC0fICUrLS0rKy8tLS0tLS0wLTItLS01LS0tNy0rNS0tLS0rKystLS0rKystKy0tLS0rLSsrK//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAAAAQUCAwQG/8QAMRABAAIAAwUECQUBAAAAAAAAAAECAwQRBSExQVESMmFxEyJCUoGRobHBM3KS0eHx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAMBAgQF/8QAHhEBAQEBAAMAAwEAAAAAAAAAAAECEQMxQRIhURP/2gAMAwEAAhEDEQA/APrEFfRfNQVBoogxQAAAAAAAAAAAAAQUBBQEFAQUBFRQRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBoqAKIoAAwAAAAAAAAAAAAEBqiAKIAogAqAAAAACooAAwAAAAHKlLW3REz5Rq765DFn2dPOYZ2NkteYeqdn4vSJ8rQ6MTBvXvVmPHTd8zsOVwAawABABoAAAAAAAASAAACooAAwAAiNWjldn87/x/tz2dlezHbtHrT3fCHtS1v5Fs4+1K1iI0iNI6QoJqAAPHmchW2+vq26ezP8ATLvWazpMaTHJ9A82ey3pK6x3o4ePgpnf9T1j+McBVFABoAAAAAAAAAAAAqKAAMHdk8Lt4kRy4z5Q6Whsmvet5Q51eR1mdrRAQegAAAAABkbSwuziaxwtv+PN5WptWutInpb6TDLXzexDc5UAdOQAAAAAAAAAAABUUAAYNPZPdt5x9mY92yr6WtX3o1jzj/rnfp3j20wEFwAAAAAHl2n+lPnVkNLa191a9Z7TNWx6Q37QB25AAAAAAAAAJAAAVFAAGDlhYk0tFo4xOriDW/h3i0RaOEuTHyWa9HOk76zx8J6tetomNYnWJ4TCGs8XzrsUBy6AACZ03zwjiMvP5ztepXu856/42Ttc61yPPmsb0l5ty4R5OoF0KgDQAAAAAAAAAAAAVFAAGAADtwMxfDn1Z3c4nhLqGNauFtGk96JrPzh6K5jDnhevzhhI4vjjueSt+cakcb1/lDoxc/h14T2p8P7Y6n+cL5K78xnL4m7hX3Y/LoB3Jxxb0AaxABoAAAAAAAAAAAAqKAAMB3ZfLWxJ3bo52ng08DJ0py1nrLm6kd5zazMLKYl+FdI6zuh68PZnvX+FY/LQE7uqTEeWuz8KOUz5zLnGTwvcj6u8c9rr8Y6ZyeF7kfVwtkMKeUx5TL0h2n4xn32ZHs3+FoeXFyeJT2dY613todTdc3EfPDax8pS/GNJ96N0szM5W2Hx3196Pz0UmpU9YsecB05AAAAAAAAAAAAFRQHryWT7frW3V5Rzt/jjkct6S2s92vHxno2IhPeufqO8Z7+6laxEaRGkRwiFBJYAAAAAAAAJjXdyAGXnsj2db07vOvT/HhfRsjaGV7E9qserPGOkq418qWs/Y8YCiYAAAAAAAAAA5UpNpiscZnSHFobKwtZm88t0ebLeRsna9+DhxSsVjl9Z6uYPO9AAAAAAAAAAAACuN6RaJrPCd0uQMfP4+FNLTWeX1hwae1sLWIv03T5MxfN7ENTlAHTAAAAAAAABt5GnZwq+PrT8WJEPoqxpER0jRPyelPHP2AJKgAAAAAAAAAAAKAMdeYp2qWr1ifmwH0b5/MV0vaOlp+6njqfkcAFUwAAAAAAAHLC71f3V+76B8/hd6v7q/d9Al5Pivj+gCagAAAAAAAAAAACgDBh579W/n+G4w89+rfz/Cnj9uN+nQAqkAAAA//9k=`
                    }
                  />
                  <LabelForInput>
                    수정
                    <InputButton
                      type="file"
                      accept="image/*"
                      onChange={saveImgFile}
                      ref={imgRef}
                    />
                  </LabelForInput>
                </ImgContainer>
              </TitleAndPic>
              <p>이메일:</p>
              <input disabled />
              <p>닉네임:</p>
              <input onChange={nickNameChangeHandler} />
              <p>비밀번호:</p>
              <input onChange={passwordChangeHandler} />
              <p>좌우명:</p>
              <input onChange={mottoChangeHandler} />
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
                {checkBoxList.map((elem, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={elem}
                        onChange={(e) => checkHandler(e, elem)}
                      />
                      <label htmlFor={elem}>{elem}</label>
                    </div>
                  );
                })}
              </PainChoice>
              <Line />
              <EditButtonContainer>
                <EditButton onClick={buttonOnclickHandler}>수정하기</EditButton>
              </EditButtonContainer>
            </UserInfoInnerContainer>
          </UserInfoContainer>
        </div>
      </OuterContainer>
    </NavAndContent>
  );
}
