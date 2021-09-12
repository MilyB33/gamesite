import { useQuery } from 'react-query';
import ContentfulClient from '../api/contentful';

const fetchPosts = async () => {
  const result = await ContentfulClient.getAllArticlesCards();

  return JSON.stringify(result);
};

const usePosts = () => {
  return useQuery('posts', fetchPosts);
};

export { usePosts, fetchPosts };
