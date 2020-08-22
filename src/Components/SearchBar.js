import React from "react";

const SearchBar = (props) => {
  return (
    <div className="input-container">
      <h1>Welcome</h1>
      <h6>{props.caption}</h6>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.searchValue}
          onChange={props.handleChange}
        />
        <span onClick={props.handleSubmit} type="submit">
          🔍
        </span>
      </form>
    </div>
  )
};

export default SearchBar;