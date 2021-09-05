import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFontFamily } from '../../styles/utils';
import Gallery from './Gallery';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 15vh 15em;
  min-height: 100vh;
  background: linear-gradient(180deg, #938686 0%, #e4dfdf 100%);
  text-align: center;
  font-family: ${getFontFamily('secondary')};
`;

const Post = ({ post }) => {
  return (
    <Wrapper>
      <h3>{post.title}</h3>
      <Gallery
        mainImage={post.mainImage}
        galleryImages={post.galleryImages}
      />
    </Wrapper>
  );
};

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default Post;
