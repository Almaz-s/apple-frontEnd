import React, { useEffect, useState } from "react";
import "../CommonResource/css/YoutubeVideos.css";

function YouTubeVideos() {
  let [YouTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCRI895Z73IhTN-53Smj8S41TMl56zwkMg"
    )
      .then((res) => res.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      });
  }, []);

  //   // fetch(URL).then((res) =>{
  //   //         return res.json()
  //   // }).then((data) => {
  //   //     setYouTubeVideos(data.items);
  //   // })
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper bold video-title-wrapper">
              <br />
              
            </div>
          </div>

          {YouTubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
              );
              return videoWrapper
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos;
