import React from "react";
import "./style.css";


function NavH() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <div className="text-left">
                    <h5><span className="fa fa-tachometer"></span> Dashboard</h5>
                  </div>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Search">
                  <div className="text-left">
                    <h5><span className="fa fa-search"></span> Search Devices</h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Devices">
                  <div className="text-left">
                    <h5><span className="fa fa-list"></span> Device List</h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CreateDevice">
                  <div className="text-left">
                    <h5><span className="fa fa-plus"></span> Create Device</h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/DeviceContact">
                  <div className="text-left">
                    <h5><span className="fa fa-address-book-o"></span> Device Contact</h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="text-left">
                    <h5><span className="fa fa-thumb-tack"></span> Ping All Devices</h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="text-left">
                    <h5><span className="fa fa-database"></span> Import DataBase</h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/api/devices">
                  <div className="text-left">
                    <h5><span className="fa fa-sitemap"></span> JSON File</h5>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  export default NavH;