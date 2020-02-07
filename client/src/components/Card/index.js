import React from "react";
import "./style.css";

function Card({ children }) {
  return (
    <div class="card">
      <div class="card-header">
        Database
  </div>
      <div class="card-body">
        <h5 class="card-title">Teleheal Device Information</h5>
        <p class="card-text">To know if the device is offline, use the button bellow " Ping Device"</p>
        {children}
        <a href="#" class="btn btn-primary">Ping Device</a>
      </div>
    </div> 
  );
}

export default Card;
