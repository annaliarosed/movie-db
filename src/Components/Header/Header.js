import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleClick = () => {
    window.location.reload(true);
  };

  return (
    <header className="header-container">
      <Link to="/" onClick={handleClick}>
        <h1>{props.title}</h1>
      </Link>
    </header>
  );
};

export default Header;
