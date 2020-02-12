import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Devices from "./pages/Devices";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import NavH from "./components/NavH";
import DashBoard from "./pages/DashBoard";
import DeviceContact from "./pages/DeviceContact";
import CreateDevice from "./pages/CreateDevice";
import Search from "./pages/Search";

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav />
    
      <NavH />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/devices" component={Devices} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/DashBoard" component={DashBoard} />
        <Route exact path="/CreateDevice" component={CreateDevice} />
        <Route exact path="/DeviceContact" component={DeviceContact} />
        <Route exact path="/devices/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
