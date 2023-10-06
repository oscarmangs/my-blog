import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/,'')
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getPostPath(){
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postsFiles = fs.readdirSync(postsDirectory);

  const allPosts = postsFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const FeaturedPosts = allPosts.filter(post => post.isFeatured); 

  return FeaturedPosts; 
}
