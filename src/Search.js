import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div className="header__search">
      <input className="header__searchInput" type="text" placeholder="Search" />
      <SearchIcon className="header__searchIcon" />
    </div>
  );
}

export default Search;
