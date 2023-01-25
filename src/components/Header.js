import { ImCool } from "react-icons/im";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <ImCool className="header--image" />
      <h2 className="header--title">MEME DIY</h2>
      <h2 className="header--project"> React project</h2>
    </header>
  );
}
