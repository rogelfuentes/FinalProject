import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div  class="jumbotron"
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron" id="JB">
      {children}
    </div>
  );
}

export default Jumbotron;
