import React, { Component } from 'react';
import DeletePetForm from '../components/DeletePetForm';
import "bulma/css/bulma.css";

export default class DeletePet extends Component {
  state = {
    message: ''
  }

  deletePet = async (e) => {
    e.preventDefault(); // Don't refresh the browser
    debugger
    await fetch('/api/pets/5', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: e.target[0].value
      })
    });
    this.setState({ message: 'Pet Deleted Successfully' })
  }
  render() {
    return (
      <div>
        <DeletePetForm deletePet={this.deletePet} />
        <h3 className="title is-2 has-text-weight-medium has-text-centered">{this.state.message}</h3>
      </div>
    )
  }
}
