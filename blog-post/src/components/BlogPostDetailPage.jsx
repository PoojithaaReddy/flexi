import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPostDetail from './BlogPostDetail';

// Example blog post data (in a real app, this would come from props, context, or a data store)
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

const BlogPostDetailPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  return <BlogPostDetail {...(post || {})} />;
};

export default BlogPostDetailPage;
