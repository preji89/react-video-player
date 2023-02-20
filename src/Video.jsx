function Video({videoSrc}) {
    return ( <div>
      <video src={videoSrc} loop autoPlay controls autoStart="true" muted/>
    </div> );
}

export default Video;