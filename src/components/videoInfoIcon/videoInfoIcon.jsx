import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './videoInfoIcon.module.css';

const VideoInfoIcon = ({ icon, name }) => (
    <li className={styles.info}>
        <Link to='' className={styles.link}>
            <span className={styles.icon}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className={styles.name}>{name}</span>
        </Link>
    </li>
    );

export default VideoInfoIcon;