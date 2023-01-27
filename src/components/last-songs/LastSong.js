import React from "react";
import "./last-song.css";

const LastSong = ({ title, image, play, artist }) => {
  return (
    <div className="last-song">
      <img src={image} alt="song" />
      <p>{title}</p>
      <p>{artist}</p>
      <p>play:{play}</p>
    </div>
  );
};

export default LastSong;
