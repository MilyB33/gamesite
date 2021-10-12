import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import ImageWrapper from '../Generic/ImageWrapper';
import { getMixins, getColor } from '../../styles/utils';

const StyledImageWrapper = styled(ImageWrapper)`
  cursor: pointer;

  &:hover > div {
    opacity: 1;
  }
`;

const HoverPlaceholder = styled.div`
  opacity: 0;
  transition: 0.3s;

  ${getMixins('absolute')}
  ${getMixins('flexbox')}

  width: 100%;
  height: 100%;
  background: rgba(30, 32, 31, 0.493);
  font-size: clamp(1rem, 5vw, 4rem);

  z-index: 2;
`;

const Icon = styled(FontAwesomeIcon)`
  * {
    fill: ${getColor('clr-light-200')};
  }
`;

const CarouselItem = ({ image, openGallery }) => {
  const { url, title } = image;

  const onClick = () => {
    openGallery(image);
  };

  return (
    <StyledImageWrapper square>
      <Image src={url} layout="fill" alt={title} />

      <HoverPlaceholder onClick={onClick}>
        <Icon icon={faSearchPlus} />
      </HoverPlaceholder>
    </StyledImageWrapper>
  );
};

CarouselItem.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  openGallery: PropTypes.func.isRequired,
};

export default CarouselItem;
