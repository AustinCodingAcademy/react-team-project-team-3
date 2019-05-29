import React, { Component } from 'react';
import AddClientForm from '../components/AddClientForm';
import "bulma/css/bulma.css";

export default class Clients extends Component {
  state = {
    message: ''
  }

  addClient = async (e) => {
    debugger
    e.preventDefault(); // Don't refresh the browser
    await fetch('/api/clients', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target[0].value,
        phoneNumber: e.target[1].value,
        address: e.target[2].value
      })
    });
    debugger
    this.setState({ message: 'Client Added Successfully' })
  }

  render() {
    return (
      <div>
        <AddClientForm addClient={this.addClient} />
        <h3 className="title is-2 has-text-weight-medium has-text-centered">{this.state.message}</h3>
      </div>
    )
  }
}
