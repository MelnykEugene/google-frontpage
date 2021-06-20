import React from "react";
import PropTypes from "prop-types";
import "./Search.css";
const Search = (props) => {
  return (
    <>
      <div className="logo-container">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        <div className="search-field-container"> </div>
      </div>
    </>
  );
};

Search.propTypes = {};

export default Search;
