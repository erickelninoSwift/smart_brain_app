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
      <div style={{ display: "flex", gap: "14px" }}>
        {/* <p
          className="f4 link dim black underline pointer"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
            hover: { color: "black" },
          }}
          onClick={() => console.log("sign out")}
        >
          Sign Out
        </p> */}
        <p
          className="f4 link dim black underline pointer"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
            hover: { color: "black" },
          }}
          onClick={() => console.log("sign out")}
        >
          Sign Out
        </p>
      </div>
    </nav>
  );
}

export default Naviagtion;
