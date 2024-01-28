import React from "react";
import "./FacialRecognition.style.css";
function FacialRecognition({ jukebox, imageFace }) {
  const { bottom, left, right, top } = jukebox;
  console.log(jukebox);
  console.log(imageFace);
  return (
    <div className="center ma">
      {imageFace && (
        <div className="absolute mt2">
          <img
            id="inputimage"
            src={imageFace}
            alt="Jackpot"
            height="auto"
            width="500px"
          />
          <div
            className="bounding-box"
            style={{
              top: top,
              left: left,
              right: right,
              bottom: bottom,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default FacialRecognition;
