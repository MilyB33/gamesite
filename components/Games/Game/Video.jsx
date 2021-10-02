import PropTypes from 'prop-types';
import Image from 'next/image';
import { ScreenshotWrapper, VideoGrid } from './Game.styles';

const Video = ({ video }) => {
  return (
    <VideoGrid>
      <h2>Watch Trailer</h2>
      <ScreenshotWrapper>
        <Image src={video.url} alt={video.alt} layout="fill" />
      </ScreenshotWrapper>
    </VideoGrid>
  );
};

export default Video;
