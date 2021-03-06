import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        <h1>{title}</h1>
      </Link>
    </header>
  );
};

export default Header;
