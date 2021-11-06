import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  ScreenshotWrapper,
  VideoGrid,
  VideoFrame,
} from './Game.styles';

const Video = ({ video }) => {
  return (
    <VideoGrid>
      <h2>Watch Video</h2>
      <ScreenshotWrapper>
        <VideoFrame
          src={`http://www.youtube.com/embed/${video.video_id}`}
        />
      </ScreenshotWrapper>
    </VideoGrid>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
};

export default Video;
