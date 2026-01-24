import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPostList from './BlogPostList.jsx';
import BlogPostDetailPage from './BlogPostDetailPage';
import BlogPostCreatePage from './BlogPostCreatePage';
import BlogPostEditPage from './BlogPostEditPage';
import Layout from './Layout';

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    date: '2023-03-10',
    url: '/posts/3',
  },
];

const App = () => (
  <Layout>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1 style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>Blog Posts</h1>
            <BlogPostList posts={samplePosts} />
          </div>
        }
      />
      <Route path="/create" element={<BlogPostCreatePage />} />
      <Route path="/edit/:id" element={<BlogPostEditPage />} />
      <Route path="/posts/:id" element={<BlogPostDetailPage />} />
    </Routes>
  </Layout>
);

export default App;
