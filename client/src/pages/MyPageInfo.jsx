import MyPageNav from "../components/MyPageNav";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid gray;
  border-radius: 1rem;
  margin-left: 5rem;
  margin-top: 5rem;
  margin-right: 15rem;
`;

export const UserInfoContainer = styled.div`
  border-radius: 12%;
  border: 1px solid gray;
  width: 45rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const PainChoice = styled.div`
  display: flex;
`;

export const PainLabel = styled.label`
  margin-right: 1rem;
`;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const UserInfoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Line = styled.hr`
  width: 40rem;
`;

export const SelectButton = styled.button`
  width: 3rem;
`;

export const SelectButtonContainer = styled.div`
  margin-top: 5rem;
  text-align: right;
`;

export const EditButton = styled.button`
  width: 25rem;
`;

export const EditButtonContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

export const NavAndContent = styled.div`
  display: flex;
`;

export default function MyPageInfo() {
  return (
    <NavAndContent>
      <NavContainer>
        <MyPageNav></MyPageNav>
      </NavContainer>
      <OuterContainer>
        <div>
          <UserInfoContainer>
            <UserInfoInnerContainer>
              <p>이메일:</p>
              <input disabled />
              <p>닉네임:</p>
              <input />
              <p>비밀번호:</p>
              <input />
              <p>좌우명:</p>
              <input />
              <p>통증 부위</p>
              <Line />
              <PainChoice>
                <PainLabel>
                  가슴
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  다리
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  등
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  머리
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  무릎
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  발
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  손
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  어깨
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  팔
                  <input type="checkbox" />
                </PainLabel>
                <PainLabel>
                  허리
                  <input type="checkbox" />
                </PainLabel>
              </PainChoice>
              <SelectButtonContainer>
                <SelectButton>선택</SelectButton>
              </SelectButtonContainer>
              <Line />
              <EditButtonContainer>
                <EditButton>수정하기</EditButton>
              </EditButtonContainer>
            </UserInfoInnerContainer>
          </UserInfoContainer>
        </div>
      </OuterContainer>
    </NavAndContent>
  );
}
