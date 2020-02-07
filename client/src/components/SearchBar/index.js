import React, { Component } from "react";
import API from '../../utils/API'
import "./style.css";

// change searchBar into a class 

function SearchBar(props){
   
        return (
            <form className="form-inline">
                {/* Grave value from input and send to state by useing an event handler( onChange) */}
                <input onChange={props.handleInputChange} value={props.searchInput}id="search" name='searchInput'className="form-control mr-sm-3"  type="search" placeholder="Device Search" aria-label="Device Search"></input>
                <button onClick={props.handleSearchSubmit} className="btn btn-outline-success my-2 my-sm-6" >Search</button>
            </form>
        );
    
}

export default SearchBar;
