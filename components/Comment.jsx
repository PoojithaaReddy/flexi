import React from 'react';
import styles from './Comment.module.css';

const Comment = ({ name, date, text, avatar }) => {
    const formattedDate = new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    return (
        <div className={styles.comment}>
            {avatar && <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />}
            <div className={styles.commentContent}>
                <strong>{name}</strong> <span>{formattedDate}</span>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Comment;