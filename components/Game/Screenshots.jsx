import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  ScreenshotsGrid,
  ScreenshotBig,
  ScreenshotWrapper,
  ViewAll,
} from './Game.styles';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Portal from '../../hoc/Portal';
import useGallery from '../../hooks/useGallery';

const Screenshots = ({ screenshots }) => {
  const { openGallery, closeGallery, activePhoto, isGalleryOpen } =
    useGallery();

  const ViewTooltip = (
    <ViewAll>
      <p>View All</p>
    </ViewAll>
  );

  const gallery = isGalleryOpen && (
    <PhotoGallery
      closeGallery={closeGallery}
      activePhoto={activePhoto}
      images={screenshots}
    />
  );

  const renderScreenshots = () =>
    screenshots.slice(1, 5).map((screenshot) => (
      <ScreenshotWrapper
        key={screenshot.id}
        onClick={() => {
          openGallery(screenshot);
        }}
      >
        <Image
          src={screenshot.url}
          alt={screenshot.alt}
          layout="fill"
        />
        {ViewTooltip}
      </ScreenshotWrapper>
    ));

  return (
    <>
      <Portal>{gallery}</Portal>

      <ScreenshotsGrid>
        <ScreenshotBig
          onClick={() => {
            openGallery(screenshots[0]);
          }}
        >
          <Image
            src={screenshots[0].url}
            alt={screenshots[0].alt}
            layout="fill"
          />
          {ViewTooltip}
        </ScreenshotBig>

        {renderScreenshots()}
      </ScreenshotsGrid>
    </>
  );
};

Screenshots.propTypes = {
  screenshots: PropTypes.instanceOf(Array).isRequired,
};

export default Screenshots;
