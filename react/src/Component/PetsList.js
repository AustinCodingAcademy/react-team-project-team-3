import React, { Component } from 'react'

export default class PetsList extends Component {

    render() {
  
        return (
         <ul>
            
            {this.props.pets.map(pets => <li key={pets.id}>{pets.name}</li>)}
             
        </ul>
        );
    
     }



}