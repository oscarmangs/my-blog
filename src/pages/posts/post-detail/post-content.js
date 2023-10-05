import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

function PostContent() {
  const DUMMY_POSTS = {
    slug: "getting-started-with-next-js1",
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    date: "2023-09-10",
    content: "# This is a first post",
  };

  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
