import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  getFontFamily,
  getColor,
  getMedias,
} from '../../styles/utils';
import Gallery from './Gallery';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 15vh 15vw;
  min-height: 100vh;
  background: ${getColor('clr-dark-300')};
  text-align: center;

  @media (max-width: ${getMedias('desktop')}) {
    padding: 16rem 2vw;
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding: 16rem 3rem;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding: 16rem 0;
  }

  & * {
    font-family: ${getFontFamily('secondary')};
    color: ${getColor('clr-light-200')};
    font-family: sans-serif;
  }

  & > h5 {
    text-align: left;
  }

  & > article {
    width: 80%;
    display: grid;
    gap: 1rem;
    text-align: left;

    @media (max-width: ${getMedias('laptop')}) {
      width: 100%;
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    & > :is(h5, article) {
      padding: 0 3rem;
    }
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
      <article>{documentToReactComponents(post.content)}</article>
    </Wrapper>
  );
};

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default Post;
