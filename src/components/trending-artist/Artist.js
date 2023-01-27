import React from "react";
import "./artist.css";

const Artist = ({ image, name }) => {
  return (
    <div className="artist">
      <img src={image} alt="artist" />
      <p>{name}</p>
    </div>
  );
};

export default Artist;
