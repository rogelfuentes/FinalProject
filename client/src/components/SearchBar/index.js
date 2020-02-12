import React from "react";
import "./style.css";

// change searchBar into a class 

function SearchBar(props){
   
        return (
            <form className="form-inline">
                <input onChange={props.handleInputChange} value={props.searchInput}id="search" name='searchInput'className="form-control mr-sm-3"  type="search" placeholder="Device Search" aria-label="Device Search"></input>
                <button onClick={props.handleSearchSubmit} className="btn btn-outline-success my-2 my-sm-6" >Search</button>
            </form>
        );
    
}

export default SearchBar;
