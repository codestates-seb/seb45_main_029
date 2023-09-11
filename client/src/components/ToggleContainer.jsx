import { VideoTypeContainer } from '../style/Main';
import Toggle from './Toggle';

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
