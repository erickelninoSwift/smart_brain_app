import React from "react";

function FacialRecognition({ imageFace }) {
  return (
    <div className="center" style={{ margin: "20px" }}>
      <img src={imageFace} alt="image" />
    </div>
  );
}

export default FacialRecognition;
