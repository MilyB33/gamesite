import styled from 'styled-components';
import { getMedias } from '../../styles/utils';

const Arrow = styled.div`
  margin: 0 -4rem;

  @media (max-width: ${getMedias('tablet')}) {
    z-index: 1;
    margin: 0 5rem;
  }

  &::before {
    position: absolute;
    bottom: 300%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;

    @media (max-width: ${getMedias('tablet')}) {
      display: none;
    }
  }
`;

const CustomArrow = (props) => {
  const { className, style, onClick, children } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </Arrow>
  );
};

export default CustomArrow;
