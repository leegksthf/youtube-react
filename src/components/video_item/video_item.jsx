import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: {snippet} }) => (
    // ({video: videoItem}) : props.video 반복해서 쓰기 싫을 때 일케 써줌. props 안에 동일한 이름이 있다면 props 안에 있는 것이 바로 여기에 할당됨.
    // ({video: {snippet}}) : video 안에 있는 snippet을 받음. 바로 snippet부터 적어주면 됨.
    <li className={styles.container}>
        <div className={styles.video}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="" />    
            <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
            </div>
    </li>
    );

export default VideoItem;