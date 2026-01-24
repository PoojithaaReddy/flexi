
export default function BlogPostItem({ post, onClick }) {
  return <h3 onClick={onClick}>{post.title}</h3>;
}
