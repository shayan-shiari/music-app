import React from "react";
import Slider from "../components/slider/Slider";
import AllArtist from "../components/trending-artist/AllArtist";
import LastSongs from "../components/last-songs/LastSongs";

const Home = () => {
  return (
    <>
      <Slider />
      <AllArtist />
      <LastSongs />
    </>
  );
};

export default Home;
