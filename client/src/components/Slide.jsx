import PropTypes from "prop-types";
import styled from "styled-components";

const IframeDesign = styled.iframe`
  margin: 0.5em;
`;

export default function Slide({ videoLink }) {
  return (
    <>
      <IframeDesign
        width="560"
        height="315"
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></IframeDesign>
    </>
  );
}

Slide.propTypes = { videoLink: PropTypes.string.isRequired };
