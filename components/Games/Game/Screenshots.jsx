import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  ScreenshotsGrid,
  ScreenshotBig,
  ScreenshotWrapper,
} from './Game.styles';

const Screenshots = ({ screenshots }) => {
  const renderScreenshots = () =>
    screenshots.map((screenshot) => (
      <ScreenshotWrapper key={screenshot.id}>
        <Image
          src={screenshot.url}
          alt={screenshot.alt}
          layout="fill"
        />
      </ScreenshotWrapper>
    ));

  return (
    <ScreenshotsGrid>
      <ScreenshotBig>
        <Image
          src={screenshots[0].url}
          alt={screenshots[0].alt}
          layout="fill"
        />
      </ScreenshotBig>

      {renderScreenshots()}
    </ScreenshotsGrid>
  );
};

Screenshots.propTypes = {
  screenshots: PropTypes.instanceOf(Array).isRequired,
};

export default Screenshots;
