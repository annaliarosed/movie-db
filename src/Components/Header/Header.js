import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header-container">
      <Link to="/" className="header">
        <h1>{props.title}</h1>
      </Link>
    </header>
  );
};

export default Header;
