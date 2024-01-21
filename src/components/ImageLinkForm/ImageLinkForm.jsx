import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <p className="f3">
        {"This Magic Brain Will Detect Faces In Your Pictures give it a try"}
      </p>
      <div className="center" style={{ display: "flex", width: "760px" }}>
        <div
          className="pa4 shadow-3 br3"
          style={{ width: "100%", display: "flex" }}
        >
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Please Enter image URL"
          />

          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
