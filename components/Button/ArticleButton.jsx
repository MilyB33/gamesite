import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { getColor } from '../../styles/utils';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: max-content;
  margin: 2rem;
  margin-left: auto;
  margin-top: auto;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  box-shadow: -6px 6px 0px 2px ${getColor('clr-dark-100')};
  background: ${getColor('clr-dark-300')};
  font-size: 1.6rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: -4px 4px 0px 2px ${getColor('clr-dark-200')};
  }

  & svg > * {
    fill: ${getColor('clr-light-100')};
  }
`;

const ArticleButton = ({ slug, children }) => {
  return (
    <>
      <Link href={`/posts/${slug}`} passHref>
        <StyledLink>
          {children}
          <FontAwesomeIcon icon={faArrowRight} />
        </StyledLink>
      </Link>
    </>
  );
};

ArticleButton.propTypes = {
  slug: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ArticleButton;
