import { VideoTypeClicked, VideoType } from '../style/Main';

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
