import React from "react";
import Likes from "../likes/likes";
import styles from "./reply.module.css";

const Reply = ({ reply: { snippet } }) => {
  const content = snippet.textDisplay;
  return (
    <li className={styles.comment}>
      <div className={styles.imgWrap}>
        <img
          src={snippet.authorProfileImageUrl}
          alt="profileImage"
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{snippet.authorDisplayName}</span>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
        <Likes likeCount={snippet.likeCount} />
      </div>
    </li>
  );
};

export default Reply;
