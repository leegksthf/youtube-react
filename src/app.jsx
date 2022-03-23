import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {   // 여기 안에서 const youtube = new Youtube(); 해주면 계속적으로 호출되기때문에 app을 사용하는 최종위치(index)인 외부에서 받아와야함.
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;