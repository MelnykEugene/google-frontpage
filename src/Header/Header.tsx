import React from "react";
import "./Header.css";
import type { Component } from "react";
import AppsIcon from "@material-ui/icons/Apps";

const Header = () => {
  return (
    <div className="header">
      <a className="header-label" href="#">
        About
      </a>
      <a className="header-label" href="#">
        Store
      </a>

      <div id="right-header">
        <a className="header-label" href="#">
          Gmail
        </a>
        <a className="header-label" href="#">
          Images
        </a>
        <AppsIcon className="icon" />
        <button id="signin">
          <b>Sign in</b>
        </button>
      </div>
    </div>
  );
};

export default Header;
