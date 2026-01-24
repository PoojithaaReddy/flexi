import React from 'react';
import BlogPostForm from './BlogPostForm';
import { useNavigate, useParams } from 'react-router-dom';

// Example blog post data (should be replaced with real data source)
const posts = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: '<p>Learn the basics of <strong>React</strong> and build your first application.</p>',
    author: 'Jane Doe',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    content: '<p>A comparison of two powerful layout systems in CSS.</p>',
    author: 'John Smith',
    date: '2023-02-15',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    content: '<p>Tips for making your web applications more accessible.</p>',
    author: 'Alex Lee',
    date: '2023-03-10',
  },
];

const BlogPostEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);
  const handleSubmit = (data) => {
    // Here you would update the post (e.g., to state, context, or API)
    // For demo, just redirect to detail page
    alert('Post updated! (Demo only, not persisted)');
    navigate(`/posts/${id}`);
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '32px 0 24px' }}>Edit Blog Post</h2>
      <BlogPostForm post={post} onSubmit={handleSubmit} />
    </div>
  );
};

export default BlogPostEditPage;
