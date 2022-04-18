import React, { useCallback, useState } from "react";
import styles from "./comments.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reply from "../reply/reply";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Likes from "../likes/likes";
import moment from "moment";

const Comments = ({ comment, comment: { snippet } }) => {
    const replys = snippet.totalReplyCount != 0 && comment.replies.comments;
    const content = snippet.topLevelComment.snippet.textDisplay; 
    const [isShowReplies, setIsShowReplies] = useState(false);

    const show = useCallback(() => {
        setIsShowReplies(!isShowReplies);
    }, [isShowReplies]);

    const oldDate = snippet.topLevelComment.snippet.publishedAt;
    const date = moment(oldDate).format('YYYY-MM-DD');

    return (
  <li className={styles.comment}>
    <div className={styles.imgWrap}>
        <img src={`${snippet.topLevelComment.snippet.authorProfileImageUrl}`} alt="" className={styles.img}/>
    </div>
    <div className={styles.info}>
    <div className={styles.nameAndDate}>
        <span className={styles.name}>
            {snippet.topLevelComment.snippet.authorDisplayName}
        </span>
        <span className={styles.date}>{date}</span>
      </div>
      <span 
        className={styles.content} 
        dangerouslySetInnerHTML={{__html: content }}>
      </span>
      <Likes likeCount={snippet.topLevelComment.snippet.likeCount}/>
    {replys && (
        <div>
            <Link to='' onClick={show} className={styles.reply}>
            {isShowReplies ? 
                    <div className={styles.replyBtn}>
                        <FontAwesomeIcon icon={faCaretDown} className={styles.downIcon}/>
                        <span>답글 {snippet.totalReplyCount}개 숨기기</span>
                    </div>
                    : <div className={styles.replyBtn}>
                    <FontAwesomeIcon icon={faCaretDown} className={styles.downIcon}/>
                    <span>답글 {snippet.totalReplyCount}개 보기</span>
                </div>
                }
            </Link>
            {isShowReplies &&
                <div>
                    {replys.map((reply) => (
                        <Reply 
                            key={reply.id}
                            reply={reply}
                        />
                    ))}
                </div>
            }
        </div>
    )}
    </div>
  </li>
);}

export default Comments;
