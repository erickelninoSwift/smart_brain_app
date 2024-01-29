import React from "react";
import Logo from "../Logo/Logo";
function Naviagtion({ ElninonChangeRoute, currentUserIsSignedIn }) {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Logo />

        {!currentUserIsSignedIn ? (
          <div style={{ display: "flex", gap: "14px" }}>
            <p
              className="f4 link dim black underline pointer"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
                hover: { color: "black" },
              }}
              onClick={() => ElninonChangeRoute("SignIn")}
            >
              Sign In
            </p>
            <p
              className="f4 link dim black underline pointer"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
                hover: { color: "black" },
              }}
              onClick={() => ElninonChangeRoute("register")}
            >
              Register
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "14px" }}>
            <p
              className="f4 link dim black underline pointer"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
                hover: { color: "black" },
              }}
              onClick={() => ElninonChangeRoute("SignIn")}
            >
              Sign Out
            </p>
          </div>
        )}
      </nav>
    </>
  );
}

export default Naviagtion;
