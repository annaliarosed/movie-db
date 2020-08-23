import React from "react";
import "./header.css"

const Header = (props) => {
  return (
    <header className="header-container">
      <h1>{props.title}</h1>
    </header>
  )
};

export default Header;