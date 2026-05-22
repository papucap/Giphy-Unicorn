import React, { useEffect, useState } from "react";
import {fetchTrendingGiphys } from "./../../api/giphyApi";
import "./Media.css";

function Media() {
  const [trending, setTrending] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getTrendingGiphys = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(randomizeData(trending.data));
  };

  useEffect(() => {
    getTrendingGiphys();
  }, []);

  console.log(trending, "what is in trending");

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/image/trending.svg" alt="Trending" />
          <h1>Trending</h1>
          {/* trending giphy and then loup through */}
        </div>
        <div className="trending-container">
          <p>content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/artists.svg" alt="Artists" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
          <p>content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/clips.svg" alt="Clips" />
          <h1>Clips</h1>
        </div>
        <div className="clips-container">
          <p>content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/stories.svg" alt="Stories" />
          <h1>Stories</h1>
        </div>
        <div className="stories-container">
          <p>content</p>
        </div>
      </div>
    </div>
  );
}

export default Media;
