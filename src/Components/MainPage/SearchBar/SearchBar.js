import React from "react";
import "./searchbar.css";

const SearchBar = ({ caption, handleSubmit, searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="input-container-wrapper">
      <div className="input-container">
        <form className="form-container" onSubmit={handleSubmit}>
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
        <h6 className="caption">{caption}</h6>
      </div>
    </div>
  );
};

export default SearchBar;
