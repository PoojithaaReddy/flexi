import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './BlogPostDetail.module.css';
import DeleteButton from './DeleteButton';
import ConfirmationDialog from './ConfirmationDialog';

const BlogPostDetail = ({ title, content, author, date }) => {
  const { id } = useParams?.() || {};
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [deleting, setDeleting] = useState(false);

  if (!title || !content || !author || !date) {
    return <p className={styles.notFound}>Blog post not found.</p>;
  }
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleDelete = () => {
    setShowDialog(true);
  };
  const handleConfirmDelete = () => {
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
      setShowDialog(false);
      alert('Post deleted! (Demo only, not persisted)');
      navigate('/');
    }, 1000);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className={styles.blogPostDetail}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author}>By {author}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
        {id && (
          <Link
            to={`/edit/${id}`}
            style={{
              background: '#007BFF',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: 4,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Edit
          </Link>
        )}
        {id && <DeleteButton onClick={handleDelete} disabled={deleting} />}
        <Link
          to="/"
          style={{
            background: '#eee',
            color: '#333',
            padding: '10px 24px',
            borderRadius: 4,
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Back to List
        </Link>
      </div>
      <ConfirmationDialog
        isOpen={showDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
        loading={deleting}
      />
    </div>
  );
};

export default BlogPostDetail;
