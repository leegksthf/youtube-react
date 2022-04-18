import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navTab.module.css';


const NavTab = ({ icon, link, iconName }) => (
    <li className={styles.item}>
        <Link to={link} className={styles.aTag}>
            <span className={styles.tab}>
                <FontAwesomeIcon icon={icon} className={styles.icon}/>
                <span className={styles.iconName}>{iconName}</span>
            </span>
        </Link>
    </li>
    );

export default NavTab;