import React from "react";
import "./top-day.css";

const TopDay = ({ image, title, artist, play }) => {
  return (
    <div className="top">
      <img src={image} alt="song" />
      <p>{title}</p>
      <p>{artist}</p>
      <p>play:{play}</p>
    </div>
  );
};

export default TopDay;
