import React from "react";
import { ImCool } from "react-icons/im";
import "../styles.css";

const Header = () => {
  return (
    <header>
      <ImCool className="header-image" />
      <h2 className="header-title">Meme generator</h2>
      <h2 className="header-project">React Project</h2>
    </header>
  );
};

export default Header;
