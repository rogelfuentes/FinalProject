import React from "react";
import "./style.css";
import logo from "./logo.png";
// import SearchBar from "../SearchBar";

function Nav() {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand" href="/">
        <div className="logo-image"><img src={logo} width="100px" alt="TDM"></img></div>
        <h3 className="text-nav">Telehealth Device Manager</h3>
      </a>
      {/* <div className="fa fa-user-circle-o" size="md-6" align-content="right" color="white"> Log Out
      </div><br /> */}
      {/* <SearchBar/> */}
    </nav>
  );
}

export default Nav;
