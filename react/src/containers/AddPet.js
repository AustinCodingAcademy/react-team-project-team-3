import React, { Component } from 'react';
import AddPetForm from '../components/AddPetsForm';
import "bulma/css/bulma.css";

export default class Pets extends Component {
  
  state = {
    message: ''
  }

  addPet = async (e) => {
    e.preventDefault(); // Don't refresh the browser
    debugger
    await fetch('/api/pets', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clientId: e.target[0].value,
        name: e.target[1].value,
        gender: e.target[2].value,
        altered: e.target[3].value
      })
    });
    debugger
    this.setState({ message: 'Pet Added Successfully' })
  }
  render() {
    return (
      <div>
        <AddPetForm addPet={this.addPet} />
        <h3 className="title is-2 has-text-weight-medium has-text-centered">{this.state.message}</h3>
      </div>
    )
  }
}
