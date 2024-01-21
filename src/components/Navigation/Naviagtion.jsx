import React from "react";
import Logo from "../Logo/Logo";
function Naviagtion() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <Logo />
      <p className="f4 link dim black underline pointer">Sign In </p>
    </nav>
  );
}

export default Naviagtion;
