import React, { Component } from 'react';

export default class UpdatePetForm extends Component {
    render() {
    return (
        <form onSubmit={this.props.updatePet}>
          <label> Id
            <input name="id" />
          </label>
          <label> name
            <input name="name" />
          </label>
          <label> Gender
            <input name="Gender" />
          </label>
          <input type="submit" />
        </form>
      
    );
  }
}