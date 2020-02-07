import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Card from "../components/Card"

class Detail extends Component {
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

      <Container fluid>
        <Col size="md-12" aline="center">
          <Card>
          {/* <Col size="md-6" align-content="right">
              <Link to="/Devices">← Back to Device List</Link>
            </Col><br/> */}
            <table className="table">
              <tr>
                <th>Display Name</th>
                <td>{this.state.device.displayName}</td>
              </tr>
              <tr>
                <th>Device ID</th>
                <td>{this.state.device.deviceId}</td>
              </tr>
              <tr>
                <th>Facility</th>
                <td>{this.state.device.facility}</td>
              </tr>
              <tr>
                <th>Unit</th>
                <td>{this.state.device.unit}</td>
              </tr>
              <tr>
                <th>Sip</th>
                <td>{this.state.device.sip}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{this.state.device.status}</td>
              </tr>
              <tr>
                <th>Floor</th>
                <td>{this.state.device.floor}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{this.state.device.phone}</td>
              </tr>
              <tr>
                <th>Contact</th>
                <td>{this.state.device.contact}</td>
              </tr>
              <tr>
                <th>Unit Notes</th>
                <td>{this.state.device.unitNotes}</td>
              </tr>
            </table>
          </Card>
        </Col>

      </Container>
    );
  }
}

export default Detail;