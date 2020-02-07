import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class DeviceContact extends Component {
    state = {
        contacts: [],
        displayName: "",
        deviceId: "",
        facility: "",
        unit: "",
        floor: "",
        phone: "",
        contact: "",
        unitNote: ""
    };
    componentDidMount() {
        this.loadContacts();
    }

    loadContacts = () => {
        API.getContacts()
            .then(res =>
                this.setState({
                    contacts: res.data,
                    displayName: "",
                    deviceId: "",
                    facility: "",
                    unit: "",
                    floor: "",
                    phone: "",
                    contact: "",
                    floor: "",
                    unitNote: ""
                })
            )
            .catch(err => console.log(err));
    };

    deleteContact = id => {
        API.deleteContact(id)
            .then(res => this.loadContacts())
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
        if (this.state.displayName && this.state.deviceId && this.state.facility && this.state.unit && this.state.floor && this.state.phone && this.state.contact && this.state.floor && this.state.unitNote) {
            API.saveDevice({
                displayName: this.state.displayName,
                deviceId: this.state.deviceId,
                facility: this.state.facility,
                unit: this.state.unit,
                floor: this.state.floor,
                phone: this.state.phone,
                contact: this.state.contact,
                floor: this.state.floor,
                unitNote: this.state.unitNote
            })
                .then(res => this.loadDevices())
                .catch(err => console.log(err));
        }
    };
    render() {
        return (
            <Container className="container">

                <div class="alert alert-secondary" role="alert">
                    Device Contact
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
                        value={this.state.floor}
                        onChange={this.handleInputChange}
                        name="floor"
                        placeholder="Floor (required)"
                    />
                    <Input
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder="phone (required)"
                    />
                    <Input
                        value={this.state.contact}
                        onChange={this.handleInputChange}
                        name="contact"
                        placeholder="contact (required)"
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
                    </select><br />

                    <select className="custom-select d-block"
                        value={this.state.unit}
                        onChange={this.handleInputChange}
                        name="unit">
                        <option value="">Unit (required)</option>
                        <option value="ICU">IC - Intensive care unit</option>
                        <option value="MS">MS - Medical Surgery</option>
                        <option value="IF">IF - Infusion Therapy</option>
                        <option value="MO">MO - Medical Oncology</option>
                    </select><br />

                    <TextArea
                        value={this.state.unitnotes}
                        onChange={this.handleInputChange}
                        name="unitnotes"
                        placeholder="Unit Notes (Optional)"
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

export default DeviceContact;
