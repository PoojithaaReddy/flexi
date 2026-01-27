import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
    const [name, setName] = useState(isLoggedIn ? userName : '');
    const [text, setText] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!text) newErrors.text = 'Comment is required';
        if (!isLoggedIn && !name) newErrors.name = 'Name is required';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onSubmit({ name, text });
            setText('');
            if (!isLoggedIn) setName('');
        }
    };

    return (
        <form className={styles.commentForm} onSubmit={handleSubmit}>
            {!isLoggedIn && (
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
            )}
            <div className={styles.formGroup}>
                <label htmlFor="comment">Comment</label>
                <textarea
                    id="comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {errors.text && <p className={styles.error}>{errors.text}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;