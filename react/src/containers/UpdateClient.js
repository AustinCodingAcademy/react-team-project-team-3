import React, { Component } from 'react';
import UpdateClientForm from '../components/UpdateClientForm';
import "bulma/css/bulma.css";

export default class UpdateClient extends Component {
  state = {
    message: ''
  }
  updateClient = async (e) => {
    e.preventDefault(); // Don't refresh the browser
    debugger
    await fetch('/api/clients/', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target[0].value,
        phoneNumber: e.target[1].value,
        address: e.target[2].value
      })
    });
    this.setState({ message: 'Updated Client Successfully' })
  }
  render() {
    return (
      <div>
        <UpdateClientForm updateClient={this.updateClient} />
        <h3 className="title is-2 has-text-weight-medium has-text-centered">{this.state.message}</h3>
      </div>
    )
  }
}
