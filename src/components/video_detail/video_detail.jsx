import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet }, tags }) => {
  if(tags !== undefined) {
    var tag = tags.map(tag => `#${tag} `)
  }
  return (
  <section className={styles.detail}>
    <iframe
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    
    <h4 className={styles.tag}>{tag}</h4>
    <h3 className={styles.title}>{snippet.title}</h3>
    <div className={styles.channel}>
      <div className={styles.channelInfo}>
        <div className={styles.channelImg}>한솔</div>
        <div className={styles.channelMetaData}>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
          <p className={styles.subscriber}>구독자 7.06만명</p>
        </div>
      </div>
      <button className={styles.subscribeBtn}>구독</button>
    </div>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
  )
};

export default VideoDetail;
