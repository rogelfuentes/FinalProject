import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Card from "../components/Card"

class Detail extends Component {
  state = {
    device: {},
    online: false
  };

  componentDidMount() {
    API.getDevice(this.props.match.params.id)
      .then(res => {
        this.setState({ device: res.data }, ()=>{
          API.getDeviceContact(this.state.device.displayName)
          .then(data => {
            console.log(data)
            this.setState({phone: data.data[0].phone})
            this.setState({floor: data.data[0].floor})
            this.setState({contact: data.data[0].contact})
            this.setState({unitNotes: data.data[0].unitNotes})
          })
        })
     
      })
      .catch(err => console.log(err));
  }

  ping() {
    var ping = require('ping');

    var hosts = ["8.8.8.8"];
    hosts.forEach(function (host) {
      ping.sys.probe(host, function (isAlive) {
        var msg = isAlive ? 'host ' + host + ' is Online' : 'host ' + host + ' is Offline';
        console.log(msg);
        this.setState({ online: msg })
      });
    });
  }

  render() {
    return (

      <Container fluid>
        <Col size="md-12" aline="center">
          <Card>
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
                <td>{this.state.floor}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{this.state.phone}</td>
              </tr>
              <tr>
                <th>Contact</th>
                <td>{this.state.contact}</td>
              </tr>
              <tr>
                <th>Unit Notes</th>
                <td>{this.state.unitNotes}</td>
              </tr>
            </table>
            {/* <Row className="d-flex" zize="md-12" aline="center"> */}
              {/* <Col size="md-4" className="d-flex flex-row align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm align-items-stretch">
                <a href="#" onClick={this.ping} className="btn btn-primary block btn-block">Ping Device</a>
              </Col> */}
              {/* <Col size="md-8" align-content="center">
                <div className={`alert px-2 ${this.state.online ? 'alert-success' : 'alert-warning'}`}>
                  {this.state.online ? 'online' : 'offline'}
                </div> */}
                {/* <div class="alert alert-success mb-0" role="alert">Device Online</div> */}
              {/* </Col>
            </Row> */}
          </Card>
        </Col>
      </Container>
    );
  }
}

export default Detail;







{/* <Col size="md-6" align-content="right">
              <Link to="/Devices">← Back to Device List</Link>
            </Col><br/> */}