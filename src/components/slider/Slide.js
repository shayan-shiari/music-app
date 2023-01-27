import React from "react";

const Slide = ({ image }) => {
  console.log(image.url);

  return (
    <>
      <img src={image.url} alt="melobit-slider" />
    </>
  );
};

export default Slide;
