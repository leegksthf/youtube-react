import React, { useEffect, useState } from "react";
import Comments from "../comments/comments";
import styles from "./video_detail.module.css";
import moment from 'moment';
import { faSquarePlus, faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faScissors, faShare } from "@fortawesome/free-solid-svg-icons";
import VideoInfoIcon from '../videoInfoIcon/videoInfoIcon';

const VideoDetail = ({comments, getVideoInfo, channels, video, video: { snippet }, video: { statistics }, tags}) => {
  const [channel, setChannel] = useState([]);
  const [comment, setComment] = useState([]);
  const [info, setInfo] = useState([]);

  const oldDate = snippet.publishedAt;
  const date = moment(oldDate).format('YYYY.MM.DD.')

  const channelId = snippet.channelId;

  const videoId =
    video.kind === "youtube#searchResult" ? video.id.videoId : video.id;

  useEffect(() => {
    comments(videoId).then((commentList) => setComment(commentList));
    channels(channelId).then((channelInfo) => setChannel(channelInfo));
    getVideoInfo(videoId).then((videoInfo) => setInfo(videoInfo));
  }, [comments, channels, getVideoInfo]);

  if (tags !== undefined) {
    var tag = tags.map((tag) => `#${tag} `);
  }
  return (
    <section className={styles.detail}>
      <iframe
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <h4 className={styles.tag}>{tag}</h4>
      <h3 className={styles.title}>{snippet.title}</h3>
      {info.length != 0 && (
        <div className={styles.videoInfo}>
          <div className={styles.videoPrimaryInfo}>
            <span className={styles.hits}>์กฐํ์ {info[0].statistics.viewCount}ํ</span>
            <span className={styles.date}>{date}</span>
          </div>
          <ul className={styles.videoSecondInfo}>
            <VideoInfoIcon icon={faThumbsUp} name={info[0].statistics.likeCount} />
            <VideoInfoIcon icon={faThumbsDown} name='์ซ์ด์' />
            <VideoInfoIcon icon={faShare} name='๊ณต์?' />
            <VideoInfoIcon icon={faScissors} name='ํด๋ฆฝ' />
            <VideoInfoIcon icon={faSquarePlus} name='์?์ฅ' />
          </ul>
        </div>
        )}
      {channel.length != 0 && (
        <div className={styles.channel}>
          <div className={styles.channelInfo}>
            <div className={styles.imgWrap}>
              <img
                src={channel[0].snippet.thumbnails.default.url}
                alt=""
                className={styles.img}
              />
            </div>
            <div className={styles.channelMetaData}>
              <p className={styles.channelTitle}>{snippet.channelTitle}</p>
              <p className={styles.subscriber}>๊ตฌ๋์ 7.06๋ง๋ช</p>
            </div>
          </div>
          <button className={styles.subscribeBtn}>๊ตฌ๋</button>
        </div>
      )}
      <pre className={styles.description}>{snippet.description}</pre>
      {comment.length != 0 && (
        <div>
          <p className={styles.commentCount}>
            ๋๊ธ {info[0].statistics.commentCount}๊ฐ
          </p>
          <ul className={styles.commentList}>
            {comment.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
          </ul>
          </div>
      )}
    </section>
  );
};

export default VideoDetail;
