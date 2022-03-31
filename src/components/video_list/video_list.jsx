import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

// 변수는 props에서 받아온 것들을 써줌
const VideoList = ({ videos, onVideoClick, display, flex }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
        flex={flex}
      />
    ))}
  </ul>
);

export default VideoList;
