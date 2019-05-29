import React, { Component } from 'react';
import UpdatePetForm from '../components/UpdatePetForm';
import "bulma/css/bulma.css";

export default class UpdatePet extends Component {
  state = {
    message: ''
  }
  updatePet = async (e) => {
    e.preventDefault(); // Don't refresh the browser
    debugger
    await fetch('/api/pets/', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clientId: e.target[0].value,
        id: e.target[1].value,
        name: e.target[2].value,
        gender: e.target[3].value,
        altered: e.target[4].value
      })
    });
    this.setState({ message: 'Updated Pet Successfully' })
  }
  render() {
    return (
      <div>
        <UpdatePetForm updatePet={this.updatePet} />
        <h3 className="title is-2 has-text-weight-medium has-text-centered">{this.state.message}</h3>
      </div>
    )
  }
}
