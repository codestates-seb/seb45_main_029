import { VideoTypeContainer } from '../style/Main';
import Toggle from './Toggle';
import PropTypes from 'prop-types';

export default function ToggleContainer({
  typeOfVideo,
  videoType,
  onClickHandler,
}) {
  return (
    <VideoTypeContainer>
      {typeOfVideo.map((elem, index) => {
        return (
          <Toggle
            key={index}
            type={elem}
            videoType={videoType}
            onClickHandler={onClickHandler}
          />
        );
      })}
    </VideoTypeContainer>
  );
}

ToggleContainer.propTypes = {
  typeOfVideo: PropTypes.array.isRequired,
  videoType: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
