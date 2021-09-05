import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFontFamily, getColor } from '../../styles/utils';
import Gallery from './Gallery';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 15vh 15em;
  min-height: 100vh;
  background: linear-gradient(180deg, #938686 0%, #e4dfdf 100%);
  text-align: center;
  font-family: ${getFontFamily('secondary')};

  & > * {
    color: ${getColor('clr-dark-100')};
  }

  & > h5 {
    text-align: left;
  }
`;

const Post = ({ post }) => {
  return (
    <Wrapper>
      <h3>{post.title}</h3>
      <Gallery
        mainImage={post.mainImage}
        galleryImages={post.galleryImages}
      />
      <h5>Published: {post.createDate}</h5>
    </Wrapper>
  );
};

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default Post;
