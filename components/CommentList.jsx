import React from 'react';
import Comment from './Comment';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => {
    return (
        <div className={styles.commentList}>
            {comments.map((comment, index) => (
                <Comment key={index} {...comment} />
            ))}
        </div>
    );
};

export default CommentList;