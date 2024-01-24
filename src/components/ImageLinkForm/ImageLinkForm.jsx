import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ onChangeDataField }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        margin: "0px auto",
      }}
    >
      <p className="f3" style={{ color: "white" }}>
        {"This Magic Brain Will Detect Faces In Your Pictures give it a try"}
      </p>
      <div
        className="center"
        style={{ display: "flex", width: "760px", border: "2px solid black" }}
      >
        <div
          className="pa4 shadow-3 br3"
          style={{
            width: "100%",
            display: "flex",
            margin: "5px",
            padding: "25px",
            gap: "5px",
          }}
        >
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Please Enter image URL"
            style={{
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              padding: "10px",
              border: "3px solid black",
            }}
            onChange={(event) => onChangeDataField(event.target.value)}
          />

          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            style={{
              cursor: "pointer",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              border: "3px solid black",
            }}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
