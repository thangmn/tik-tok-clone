import React, {useState, useEffect} from "react";
import Video from "./Video";
import db from "./firebase";
import './App.css';
import { collection, getDocs } from "firebase/firestore"; 

function App() {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //    db.collection("videos").onSnapshot((snapshot) =>
  //     setVideos(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  async function getVideos(db) {
    const videosCol = collection(db, 'videos');
    const videosSnapshot = await getDocs(videosCol);
    setVideos(videosSnapshot.docs.map(doc => doc.data()));
  }
 getVideos(db);

  return (
    <div className="app">
      <div className="app__videos">
      {videos.map(({url, chanel, descriptions, song, likes, messages, shares})=>(
        <Video 
          url={url}
          chanel ={chanel}
          descriptions ={descriptions}
          song ={song}
          likes ={likes}
          messages ={messages}
          shares={shares}
        />
      ))}
      {/* <Video 
        url="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          chanel ="thangmn"
          descriptions ="i'm here"
          song ="winner chicken dinner"
          likes ={222}
          messages ={111}
          shares={222}
      /> */}
      
      </div>
    </div>
  );
}

export default App;
