function Menu({onSelectVideo,videoNames}) {
    function onClick(event){
        onSelectVideo(event.target.value);
    }
    return (
    <form className="video-menu" onClick={onClick}>
        {
          videoNames.map((value,i)=> (
            <div className="video-inputs">
               <input key={i} type ="radio" name="src" value={value}/>{value} 
            </div>
            
          ))

        }       
    </form>
      );
}

export default Menu;