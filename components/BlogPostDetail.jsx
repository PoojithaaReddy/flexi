
export default function BlogPostDetail({ post }) {
  if (!post) return <p>Select a post</p>;
  return (
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  );
}
