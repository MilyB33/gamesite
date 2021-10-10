import ContentfulClient from '../../api/contentful';
import {
  getExactPost,
  flattenArticlesData,
} from '../../utlis/filter';
import Layout from '../../components/Layouts/Layout';
import PostWrapper from '../../components/post/Post';

const Post = ({ post }) => <PostWrapper post={post} />;

export async function getStaticPaths() {
  const res = await ContentfulClient.getAllArticlesCards();

  const flattened = flattenArticlesData(res);

  const paths = flattened.map((post) => ({
    params: { id: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await ContentfulClient.getAllArticlesCards();

  const post = getExactPost(res, params.id);

  return { props: { post } };
}

Post.getLayout = function displayLayout(page) {
  return <Layout title="Home">{page}</Layout>;
};

export default Post;
