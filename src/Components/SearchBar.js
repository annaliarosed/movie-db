import React from "react";

const SearchBar = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.searchValue}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;