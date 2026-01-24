
import BlogPostItem from "./BlogPostItem";
export default function BlogPostList({ posts, onSelect }) {
  return posts.map(p => (
    <BlogPostItem key={p.id} post={p} onClick={() => onSelect(p)} />
  ));
}
