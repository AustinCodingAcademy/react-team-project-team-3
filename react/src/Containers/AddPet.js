import React, { Component } from 'react';
import AddPetForm from '../components/AddPetForm';

export default class Pets extends Component {
    state = {
        message : ''
    }
      addPet = async (e) => {
        e.preventDefault(); // Don't refresh the browser
        await fetch('/api/pets', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'clientId': e.target.elements.clientId.value,
            'name': e.target.elements.name.value,
            'gender' : e.target.elements.Gender.value,
             'altered' : e.target.elements.Gender.value,
          })
        });
        this.setState({message: 'Added Pet Successfully'})
      }
  render() {
    return (
      <div>
         <h1>Add A Pet</h1>
         <AddPetForm addPet={this.addPet} />
         <h3>{this.state.message}</h3>
      </div>
    )
  }
}
