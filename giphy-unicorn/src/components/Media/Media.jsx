import React, { useEffect, useState } from "react";
import { fetchSearchGiphys, fetchTrendingGiphys } from "./../../api/giphyApi";
import "./Media.css";
import TrendingGiphy from "../TrendingGiphy/TrendingGiphy";
import giphyArtists from "../../artists";
import ArtistGiphy from "../ArtistGiphy/ArtistGiphy";

function Media() {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getTrendingGiphys = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(randomizeData(trending.data));
  };

  const getArtists = async () => {
    const artists = await Promise.all(
      giphyArtists.map(async (giphyArtists) => {
        return fetchSearchGiphys(giphyArtists).then((res) => res.data.data);
      }),
    );
    setArtists(artists.flat());
  };

  useEffect(() => {
    getTrendingGiphys();
    getArtists();
  }, []);

  console.log(artists, "what is in artists");

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/image/trending.svg" alt="Trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">
          {trending?.map((trendingGiphy, index) => {
            return <TrendingGiphy giphy={trendingGiphy} key={index} />;
          })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/image/artists.svg" alt="Artists" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
          {artists.map((artistGiphys, index) => {
            return <ArtistGiphy giphy={artistGiphys} key={index} />;
          })}
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
