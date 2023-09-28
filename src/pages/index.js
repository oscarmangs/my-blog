import FeaturedPosts from "../../components/home-page/featured-posts";
import Hero from "../../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-next-js1",
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "next js is a great framework for production",
    date: "2023-09-10",
  },
  {
    slug: "getting-started-with-next-js2",
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "next js is a great framework for production",
    date: "2023-09-10",
  },
  {
    slug: "getting-started-with-next-js3",
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "next js is a great framework for production",
    date: "2023-09-10",
  },
  {
    slug: "getting-started-with-next-js4",
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "next js is a great framework for production",
    date: "2023-09-10",
  },
  {
    slug: "getting-started-with-next-js5",
    title: "getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt: "next js is a great framework for production",
    date: "2023-09-10",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
