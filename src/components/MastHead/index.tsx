import React from "react";

import Navbar from "../Navbar";
import "./styles.css";

function Masthead() {
  return (
    <header role="banner" className="header">
      <h1>
        Command & Command
        <wbr />
        for
      </h1>
      <Navbar />
    </header>
  );
}

export default Masthead;
