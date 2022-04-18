import React from 'react';
import styles from './likes.module.css';
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Likes = ({ likeCount }) => (
    <div className={styles.toolbar}>
        <div className={styles.thumbsUp}>
            <FontAwesomeIcon icon={faThumbsUp} className={styles.thumbsUpIcon} />
            <span className={styles.thumbsUpCount}>{likeCount}</span>
        </div>
        <FontAwesomeIcon icon={faThumbsDown} className={styles.thumbsDown} />
    </div>
    );

export default Likes;