import React from "react";
import "./searchbar.css";

const SearchBar = ({ caption, handleSubmit, searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          className="search-bar"
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
        <img
          onClick={handleSubmit}
          type="submit"
          className="search-logo"
          alt="search logo"
          src="https://img.icons8.com/windows/32/000000/search.png"
        />
      </form>
      <h6 className="caption">
        Millions of movies, TV shows and people to discover. Explore now.
      </h6>
    </div>
  );
};

export default SearchBar;
