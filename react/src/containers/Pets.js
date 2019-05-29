import React, { Component } from 'react';
/*import Edit from './component/edit.component';*/

import PetsList from '../components/PetList';
import "bulma/css/bulma.css";

export default class Pets extends Component {
  state = {
    pets: [],
    edit: false
  }

  componentDidMount = async () => {
    const response = await fetch('/api/pets');
    const pets = await response.json();
    debugger
    this.props.match.petsList = pets
    this.setState({ 'pets': pets })
  }


  render() {
    return (
      <div className='container'>
        <PetsList petsList={this.state.pets}></PetsList>
      </div>
    )
  }
}


