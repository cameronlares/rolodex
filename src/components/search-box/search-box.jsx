import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleChange }) => (
  <input
  className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);


//Used props for the placeholder and handleChange
//Lifting state up