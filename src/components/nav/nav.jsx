import React from 'react';
import styles from './nav.module.css';
import { faHouseChimney, faCompass, faClapperboard, faBoxArchive, faArrowRotateLeft, faCirclePlay, faClock, faThumbsUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NavTab from '../../navTab/navTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = ( props ) => {

    return (
    <nav>
        <ul className={styles.list}>
            <NavTab icon={faHouseChimney} link='/' iconName='홈'/>
            <NavTab icon={faCompass} link='/' iconName='탐색'/>
            <NavTab icon={faClapperboard} link='/' iconName='구독'/>
        </ul>
        <ul className={styles.list}>
            <NavTab icon={faBoxArchive} link='/' iconName='보관함'/>
            <NavTab icon={faArrowRotateLeft} link='/' iconName='시청 기록' />
            <NavTab icon={faCirclePlay} link='/' iconName='내 동영상' />
            <NavTab icon={faClock} link='/' iconName='나중에 볼 동영상'/>
            <NavTab icon={faThumbsUp} link='/' iconName='좋아요 표시한 동영상'/>
            <NavTab icon={faAngleDown} link='/' iconName='더보기'/>
        </ul>
        <ul className={styles.list}>
            <a href="https://github.com/leegksthf">
                <span className={styles.tab}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                    <span className={styles.iconName}>Github</span>
                </span>
            </a>
        </ul>
    </nav>
    )
};

export default Nav;