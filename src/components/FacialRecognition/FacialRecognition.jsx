import React from "react";

function FacialRecognition({ imageFace }) {
  return (
    <div
      className="center"
      style={{
        margin: "20px",
        height: "auto",
        width: "500px",
        border: "1px solid black",
        boxShadow: "initial",
      }}
    >
      <img
        id="imageInput"
        src={imageFace}
        alt="Jackpot"
        height="auto"
        width={500}
        style={{ objectFit: "cover", margin: "0px auto" }}
      />
    </div>
  );
}

export default FacialRecognition;
