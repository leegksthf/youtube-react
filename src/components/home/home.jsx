import React, { useCallback, useEffect, useState } from 'react';
import Nav from '../nav/nav';
import SearchHeader from '../search_header/search_header';
import VideoDetail from '../video_detail/video_detail';
import VideoList from '../video_list/video_list';
import styles from './home.module.css';

const Home = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const logoClick = useCallback(() => {
    setSelectedVideo(null);
    setVideos([]);
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [])

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube.search(query).then((videos) => setVideos(videos));
    },
    [youtube]
  );

  const getVideoInfo = async (id) => {
    return youtube.getVideoInfo(id);
  }

  const comment = async (videoId) => {
    return youtube.comments(videoId);
  }

  const channels = async (channelId) => {
    return youtube.channels(channelId);
  }

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

return (
    <div className={styles.app}>
        <SearchHeader onSearch={search} logoClick={logoClick}/>
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail
                video={selectedVideo} 
                tags={selectedVideo.snippet.tags} 
                getVideoInfo={getVideoInfo}
                comments={comment}
                channels={channels}
              />
            </div>
          )}
          {selectedVideo === null && 
          <div className={styles.nav}>
            <Nav />
          </div>
          }
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
              flex={selectedVideo ? "row" : "column"}
            />
          </div>
        </section>
      </div>
    )
};
export default Home;