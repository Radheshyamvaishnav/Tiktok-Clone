import "./Video.css";
import Video from "./Video";
import './App.css';
import axios from './axios';
import { useState,useEffect } from "react";

function App() {
  const [videos,setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts(){

        const response = await axios.get("/v2/posts");

        return response;
    }

      fetchPosts();
  }, []);

  
  return (
    
    
    <div className="app">
      {/*<Videos.map({url,channel etc})*/}
      <div className="app_videos">
      <Video url="https://player.vimeo.com/external/420234383.sd.mp4?s=bbe7a79800aaced5acde961d42af3838a17d4741&profile_id=165&oauth2_token_id=57447761"
      channel='Calm_Girl'
      description="Peace"
      song='Enjoying Beauty'
      likes={123}
      messages={232}
      shares={546} />
      <Video />
      <Video url="https://player.vimeo.com/external/461863200.sd.mp4?s=db10929da384faefb21d97e4d5f8eadd424dd32b&profile_id=165&oauth2_token_id=57447761"
      channel='NameBoy'
      description="Lets Dance Together"
      song='Lookit am a rider'
      likes={123}
      messages={232}
      shares={546} />
      <Video />
      
      </div>
      
    </div>
  );
}

export default App;
