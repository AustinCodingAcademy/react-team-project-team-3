import React, { Component, PropTypes } from 'react';
import { Table, Button, Alert  } from "react-bootstrap";
import { Link } from 'react-router-dom';




export default class PetsList extends Component {
    constructor(props) {
        super(props);
        
    this.state={
        error:null,
        Pets:[],
        response:{}
        };

    }

    componentDidMount() {
      const apiUrl ='/api/pets';
  
      fetch(apiUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              pets: result
            });
          },
          (error) => {
            this.setState({ error });
          }
        )
    }
  
    deletePet(id) {
      const { pets } = this.state;
  
      const apiUrl = '/api/pets/deletePet';
      const formData = new FormData();
      formData.append('id', id);
  
      const options = {
        method: 'DELETE',
        body: formData
      }
  
      fetch(apiUrl, options)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              response: result,
              pets: pets.filter(pets => pets.id !== id)
            });
          },
          (error) => {
            this.setState({ error });
          }
        )
    }

     

    render() {
        return (
          <div>
            <h2>Pets List</h2>
           <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Pet Name</th>
                <th>Gender</th>
              </tr>
            </thead>
          <tbody>
        {this.props.petslist.map(pets => (
        // <li key={pets.id}>{pets.name}</li>
        <tr key={pets.id}>
        <td>{pets.id}</td>
        <td>{pets.name}</td>
        <td>{pets.gender}</td>
      
        <td>
          <Button variant="info" onClick={() => this.props.editPet(pets.id)}>Edit</Button>
          &nbsp;<Button variant="danger" onClick={() => this.deletePet(pets.id)}>Delete</Button>
        </td>
      </tr>
    ))}
        </tbody>
        </Table>
      </div>
  )
}




}




