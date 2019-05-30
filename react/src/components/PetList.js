import React, { Component, PropTypes } from 'react';
import "bulma/css/bulma.css";
import { Link } from 'react-router-dom';
import UpdatePetForm from '../components/UpdatePetForm';
import UpdatePet from '../containers/UpdatePet';


export default class PetsList extends Component {

  state = {
    pets: []
  }


  render() {
    debugger
    return (
      <section>
        <h1 className="title is-1 has-text-weight-medium has-text-centered">Pets</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Pet ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
              {/* <th>Altered</th> */}
            </tr>
          </thead>
          {
            this.props.petsList.map(pets =>
              <tbody>
                <th>{pets.clientId}</th>
                <th>{pets.id}</th>
                <td>{pets.name}</td>
                <td>{pets.gender}</td>
                <td>
                  <a href='/pets/update' className='button is-link'>Edit</a>
                </td>
                <td>
                  <a href='/pets/delete' className='button is-link'>Delete</a>
                </td>
                {/* <td>{pets.altered}</td> */}
              </tbody>)
            // {/* <td>
            //   <button variant="info" onClick={() => this.updateEdit(pets.id)}>Edit</button>
            //   <button variant="danger" onClick={() => this.deletePets(pets)}>Delete</button>
            // </td> */}

          }
        </table>
      </section>
    )
  }
}




