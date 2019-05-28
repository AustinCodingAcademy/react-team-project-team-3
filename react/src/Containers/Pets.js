import React, { Component } from 'react';
/*import Edit from './component/edit.component';*/

import PetsList from '../Component/PetsList';
import AddPetsForm from '../Component/AddPetsForm';


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
//Add Pet//
addPets = async (e) => {
 e.preventDefault();
  await fetch ('/api/pets',{
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      clientId: e.target.elements.id.value,
      name: e.target.elements.name.value,
      gender : e.target.elements.Gender.value
      //  'altered' : e.target.elements.Gender.value,
    } )
  });

  debugger
  const response = await fetch ('/api/pets');
  const Pets = await response.json();
  this.setState( {'Pets': Pets })
}


//Update Pet

updatePets = async (e) => {
  e.preventDefault();
   await fetch ('/api/pets',{
     method: "PUT",
     headers:{
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       clientId: e.target.elements.id.value,
       name: e.target.elements.name.value,
       gender : e.target.elements.Gender.value
       //  'altered' : e.target.elements.Gender.value,
     } )
   });
 
   debugger
   const response = await fetch ('/api/pets');
   const Pets = await response.json();
   this.setState( {'Pets': Pets })
 }

//Delete Pet

deletePets = async (e) => {
  e.preventDefault();
   await fetch ('/api/pets/id',{
     method: "DELETE",
     headers:{
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       id: e.target.elements.id.value,
       //  'altered' : e.target.elements.Gender.value,
     } )
   });
 
   debugger
   const response = await fetch ('/api/pets');
   const Pets = await response.json();
   this.setState( {'Pets': Pets })
 }




render() {
  
  return (
    <div>
      <h1>Pets</h1>
     <AddPetsForm addPets = {this.addPets}></AddPetsForm>
      <PetsList petslist = {this.state.Pets}></PetsList> 
    </div>
  )

}

} 




