import { VideoTypeClicked, VideoType } from '../style/Main';
import PropTypes from 'prop-types';

export default function Toggle({ type, videoType, onClickHandler }) {
  return (
    <>
      {type === videoType ? (
        <VideoTypeClicked onClick={onClickHandler}>{type}</VideoTypeClicked>
      ) : (
        <VideoType onClick={onClickHandler}>{type}</VideoType>
      )}
    </>
  );
}

Toggle.propTypes = {
  videoType: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
