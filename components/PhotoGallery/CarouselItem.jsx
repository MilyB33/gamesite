import PropTypes from 'prop-types';
import Image from 'next/image';
import ImageWrapper from '../all/ImageWrapper';

const CarouselItem = ({ image }) => {
  const { url, title } = image;

  return (
    <ImageWrapper>
      <Image layout="fill" src={url} alt={title} />
    </ImageWrapper>
  );
};

CarouselItem.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};

export default CarouselItem;
