import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p className={styles.emptyMessage}>No blog posts available.</p>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
        <Link to="/create" style={{
          background: '#007BFF', color: '#fff', padding: '10px 24px', borderRadius: 4, textDecoration: 'none', fontWeight: 600
        }}>+ Create New Post</Link>
      </div>
      <div className={styles.blogPostList}>
        {posts.map((post) => (
          <BlogPostItem
            key={post.id}
            id={post.id}
            title={post.title}
            summary={post.summary}
            date={post.date}
            url={post.url}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
