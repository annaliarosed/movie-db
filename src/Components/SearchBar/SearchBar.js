import React from "react";
import "./searchbar.css";

const SearchBar = ({ caption, handleSubmit, searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="input-container">
      <h1>Welcome</h1>
      <h6>{caption}</h6>
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
        <span onClick={handleSubmit} type="submit">
          <img
            className="search-logo"
            alt="search logo"
            src="https://img.icons8.com/windows/32/000000/search.png"
          />
        </span>
      </form>
    </div>
  );
};

export default SearchBar;