
import { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Video from './Video';


const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
  
};


function App() {

  const videoNames = Object.keys(videos);

  const [videoSrc,setVideoSrc] = useState(videos.deer);


  function onSelectVideo(video){
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div className="App">
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoNames={videoNames}/>
      <Video videoSrc={videoSrc}/>
      
    </div>
  );
}

export default App;
