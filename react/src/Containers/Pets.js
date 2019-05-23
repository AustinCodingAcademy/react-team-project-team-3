import React, { Component } from 'react';
/*import Edit from './component/edit.component';*/
import AddPetsForm from '../Component/AddPetsForm' ;
import PetsList from '../Component/PetsList';

export default class Pets extends Component {
state={
  Pets:[]
  }


  componentDidMount = async () => {
    const response = await fetch('/api/pets');
    const Pets = await response.json();
    debugger
    this.props.match.petslist =Pets
    this.setState({ 'Pets' : Pets})
  }

addPets = async (e) => {
  e.PreventDefault();
  await fetch ('/api/Pets',{
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'id': e.target.elements.id.value,
      'name': e.target.elements.name.value,
      'Gender' : e.target.elements.Gender.value
    } )
  });
  const response = await fetch ('/api/Pets');
  const Pets = await response.JSON();
  this.setState( {'Pets': Pets })
}
  
render() {
  

  debugger
  return (
    <div>
      <h1>Pets</h1>
      <AddPetsForm addPets = {this.addPets}></AddPetsForm>
      <PetsList petslist = {this.state.Pets}></PetsList> 
          </div>
  )

}

} 




