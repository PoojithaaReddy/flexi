import React from 'react';
import BlogPostForm from './BlogPostForm';
import { useNavigate } from 'react-router-dom';

const BlogPostCreatePage = () => {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    // Here you would save the new post (e.g., to state, context, or API)
    // For demo, just redirect to home
    alert('Post created! (Demo only, not persisted)');
    navigate('/');
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '32px 0 24px' }}>Create New Blog Post</h2>
      <BlogPostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default BlogPostCreatePage;
