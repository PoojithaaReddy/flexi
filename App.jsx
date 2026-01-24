
import { useState } from "react";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetail from "./components/BlogPostDetail";

const postsData = [
  { id: 1, title: "React Basics", author: "Admin", content: "<p><strong>HTML</strong> Content</p>" }
];

export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  return (
    <>
      <BlogPostList posts={postsData} onSelect={setSelectedPost} />
      <BlogPostDetail post={selectedPost} />
    </>
  );
}
