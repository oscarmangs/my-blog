import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const post = props.post;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    img() {
      return (
        <Image
          src={`/images/posts/${post.slug}/${post.image}`}
          alt="123"
          width={600}
          height={300}
        />
      );
    },
    code(code) {
      return (
        <Prism language={'javascript'} style={atomDark}>
          {code.children}
        </Prism>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
