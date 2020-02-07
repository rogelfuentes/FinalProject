import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Display Name</th>
            <th>DeviceID</th>
            <th>Facility</th>
            <th>Unit</th>
            <th>Sip</th>
            <th>Status</th>
            <th>Note</th>
          </tr>
        </thead>
      
          <ul className="list-group">{children}</ul>
       
      </table>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
