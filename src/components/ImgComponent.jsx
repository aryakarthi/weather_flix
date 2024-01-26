import React from "react";

const ImgComponent = ({ imgURL, imgTitle, rotateDeg }) => {
  const rotateStyle = {
    transform: `rotate(${rotateDeg}deg)`,
  };

  return (
    <img src={imgURL} alt={imgTitle} className="w-10" style={rotateStyle} />
  );
};

export default ImgComponent;
