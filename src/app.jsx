import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
// import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav/nav";


function App({ youtube }) {
  // 여기 안에서 const youtube = new Youtube(); 해주면 계속적으로 호출되기때문에 app을 사용하는 최종위치(index)인 외부에서 받아와야함.
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

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
      <div className={styles.app}>
        <Nav />
        <SearchHeader onSearch={search} logoClick={logoClick}/>
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail 
              video={selectedVideo} 
              tags={selectedVideo.snippet.tags} 
              />
            </div>
          )}
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
  );
}

export default App;
