import React, { Component } from 'react'

export default class PetsList extends Component {
    state={
        Pets:[]
        }
    render() {
  debugger
        return (
         <ul>
            
            
            {this.props.petslist.map(pets => <li key={pets.id}>{pets.name}</li>)}
             
        </ul>
        );
    
     }



}