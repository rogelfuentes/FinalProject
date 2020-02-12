import React from "react";
import "./style.css";

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-header">
        Database
  </div>
      <div className="card-body">
        <h5 className="card-title">Teleheal Device Information</h5>
        <p className="card-text">To know if the device is offline, use the button bellow "Ping Device"</p>
        {children}
      </div>
    </div> 
  );
}

export default Card;
