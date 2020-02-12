import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class CreateDevices extends Component {
    state = {
        devices: [],
        displayName: "",
        deviceId: "",
        facility: "",
        unit: "",
        sip: "",
        status: "",
        notes: ""
    };

    componentDidMount() {
        this.loadDevices();
    }

    loadDevices = () => {
        API.getDevices()
            .then(res =>
                this.setState({ devices: res.data, displayName: "", deviceId: "", facility: "", unit: "", sip: "", status: "", notes: "" })
            )
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

    render() {
        return (
            <Container className="container">
                <div class="alert alert-primary text-justifie" role="alert">
                    Create devices
                </div>
                <form>
                    <Input
                        value={this.state.displayName}
                        onChange={this.handleInputChange}
                        name="displayName"
                        placeholder="DisplayName (required)"
                    />
                    <Input
                        value={this.state.deviceId}
                        onChange={this.handleInputChange}
                        name="deviceId"
                        placeholder="DeviceId (required)"
                    />
                    <Input
                        value={this.state.sip}
                        onChange={this.handleInputChange}
                        name="sip"
                        placeholder="Sip (required)"
                    />

                    <select className="custom-select d-block"
                        value={this.state.facility}
                        onChange={this.handleInputChange}
                        name="facility">
                        <option value="">Facility (required)</option>
                        <option value="AF">AF - American Fork Hospital</option>
                        <option value="AV">AV - Alta View Hospital</option>
                        <option value="DX">DX - Dixie Regional Medical Center</option>
                        <option value="IM">IM - Intermountain Medical Center</option>
                    </select><br></br>

                    <select className="custom-select d-block"
                        value={this.state.unit}
                        onChange={this.handleInputChange}
                        name="unit">
                        <option value="">Unit (required)</option>
                        <option value="ICU">IC - Intensive care unit</option>
                        <option value="MS">MS - Medical Surgery</option>
                        <option value="IF">IF - Infusion Therapy</option>
                        <option value="MO">MO - Medical Oncology</option>
                    </select><br></br>

                    <select className="custom-select d-block"
                        value={this.state.status}
                        onChange={this.handleInputChange}
                        name="status">
                        <option value="">Status (required)</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select><br></br>

                    <TextArea
                        value={this.state.notes}
                        onChange={this.handleInputChange}
                        name="notes"
                        placeholder="Notes (Optional)"
                    />
                    <FormBtn
                        disabled={!(this.state.displayName && this.state.deviceId && this.state.facility && this.state.unit && this.state.sip && this.state.status)}
                        onClick={this.handleFormSubmit}>Submit Device
        </FormBtn>
                </form>

            </Container>
        )
    }
};

export default CreateDevices;