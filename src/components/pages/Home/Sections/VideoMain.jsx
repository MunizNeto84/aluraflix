import Youtube from "react-youtube";
import { VideoSection } from "../../../../styles/Div/Div";
import { CloseButton } from "../../../../styles/Button/Button";

const VideoMain = ({ videoUrl, showVideo, setShowVideo }) => {
  if (!videoUrl) {
    return null;
  }

  return (
    <VideoSection show={showVideo}>
      <CloseButton onClick={() => setShowVideo(false)}>X</CloseButton>
      <Youtube
        videoId={videoUrl}
        opts={{
          playerVars: { autoplay: 1, mute: 0, controls: 1, rel: 0, fs: 1 },
        }}
      />
    </VideoSection>
  );
};

export default VideoMain;
