import FeaturedPosts from "../../components/home-page/featured-posts";
import Hero from "../../components/home-page/hero";
import { getFeaturedPosts } from "../../lib/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to my blog!</title>
        <meta name="description" content="I post about web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
