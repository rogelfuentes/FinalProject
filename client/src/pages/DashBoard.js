import React, { Component } from "react";
import API from "../utils/API";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";

class DashBoard extends Component {
    state = {
        device: {}
    };

    componentDidMount() {
        API.getDevice(this.props.match.params.id)
          .then(res => this.setState({ device: res.data }))
          .catch(err => console.log(err));
      }

    render() {
        return (

            <h1>HEY</h1>

        );
    }
}
export default DashBoard;