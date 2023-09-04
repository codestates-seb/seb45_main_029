import PropTypes from "prop-types";
import styled from "styled-components";

const IframeDesign = styled.iframe`
  margin: 0.5em;
`;

const ImageDesign = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export default function Slide({ videoLink }) {
  const imgOnclickHandler = () => {
    console.log("hey");
    // axios 요청으로 bookmark리스트에서 삭제해야함
    // redux로도 가지고 있어야함?
    // 애초에 axios 요청으로 북마크 리스트를 가져와야함 그 다음에 머 삭제하든가 말든가
    // 그리고 별은 색칠되어 있어야하고,
  };

  return (
    <IframeContainer>
      <IframeDesign
        width="560"
        height="315"
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></IframeDesign>
      <ImageDesign
        onClick={imgOnclickHandler}
        src="/images/starFill.png"
        alt="star"
      />
    </IframeContainer>
  );
}

Slide.propTypes = { videoLink: PropTypes.string.isRequired };
