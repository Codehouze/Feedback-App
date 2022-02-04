import React from "react";
import preloader from "../assets/Preloader.gif";

function Preloader() {
  return (
    <img
      src={preloader}
      alt="Loading..."
      style={{
        width: "100%",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Preloader;
