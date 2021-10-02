import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  ScreenshotsGrid,
  ScreenshotBig,
  ScreenshotWrapper,
  ViewAll,
} from './Game.styles';

const Screenshots = ({ screenshots }) => {
  const ViewTooltip = (
    <ViewAll>
      <p>View All</p>
    </ViewAll>
  );

  const renderScreenshots = () =>
    screenshots.slice(1, 5).map((screenshot) => (
      <ScreenshotWrapper key={screenshot.id}>
        <Image
          src={screenshot.url}
          alt={screenshot.alt}
          layout="fill"
        />
        {ViewTooltip}
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
        {ViewTooltip}
      </ScreenshotBig>

      {renderScreenshots()}
    </ScreenshotsGrid>
  );
};

Screenshots.propTypes = {
  screenshots: PropTypes.instanceOf(Array).isRequired,
};

export default Screenshots;
