import React from "react";
import Tilt from "react-parallax-tilt";
import myLogo from "./logoimage/jackpotlogo.png";
function Logo() {
  return (
    <div style={{ margin: "10px" }}>
      <Tilt
        className="Tilt br2 shadow-1"
        style={{ backgroundColor: "transparent" }}
      >
        <img
          src={myLogo}
          alt="Jackpotlog"
          width={"150px"}
          style={{ borderRadius: "75px" }}
        />
      </Tilt>
    </div>
  );
}

export default Logo;
