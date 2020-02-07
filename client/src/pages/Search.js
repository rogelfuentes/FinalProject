import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import SearchBar from "../components/SearchBar";

class Search extends Component {
  state = {
    devices: [],
    displayName: "",
    deviceId: "",
    facility: "",
    unit: "",
    sip: "",
    status: "",
    notes: "",
    searchInput:""
  };

  componentDidMount() {
    this.loadDevices();
  }

  loadDevices = () => {
    API.getDevices()
      .then(res => {
        console.log(res.data)
        this.setState({ devices: res.data, displayName: "", deviceId: "", facility: "", unit: "", sip: "", status: "", notes: "" })
      })
      .catch(err => console.log(err));
  };

  deleteDevice = id => {
    API.deleteDevice(id)
      .then(res => this.loadDevices())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.displayName && this.state.deviceId && this.state.facility && this.state.unit && this.state.sip && this.state.status) {
      API.saveDevice({
        displayName: this.state.displayName,
        deviceId: this.state.deviceId,
        facility: this.state.facility,
        unit: this.state.unit,
        sip: this.state.sip,
        status: this.state.status,
        notes: this.state.notes
      })
        .then(res => this.loadDevices())
        .catch(err => console.log(err));
    }
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    let searchInput = this.state.searchInput;
    API.getDeviceByName(searchInput)
    .then((data) => {
        console.log(data)
        this.setState({devices: data.data})
    })

    console.log(searchInput)
}

  render() {
    return (

      <Container className="container">
          <SearchBar
          searchInput={this.state.searchInput}
          handleInputChange={this.handleInputChange}
          handleSearchSubmit={this.handleSearchSubmit}
          />
        <Row>
          <Col size="12">
            {this.state.devices.length ? (
              <List>

                {this.state.devices.map(device => (
                  <tr key={device._id}>
                    
                    <td><Link to={"/devices/" + device._id}>
                      {device.displayName}
                    </Link></td>
                    <td>{device.deviceId}</td>
                    <td>{device.facility}</td>
                    <td>{device.unit}</td>
                    <td>{device.sip}</td>
                    <td>{device.status}</td>
                    <td>{device.notes}</td>


                    {/* <DeleteBtn onClick={() => this.deleteDevice(device._id)} /> */}
                  </tr>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
