import { getPostData, getPostPath } from "../../../lib/posts-util";
import PostContent from "./post-detail/post-content";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {

  const postFiles = getPostPath();

  const slugs = postFiles.map(fileName => fileName.replace(/\.md$/, ""))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: 'blocking'
  };
}

export default PostDetailPage;
