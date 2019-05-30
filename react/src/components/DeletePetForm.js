import React, { Component } from 'react';
import "bulma/css/bulma.css";

export default class DeletePetForm extends Component {
  render() {
    debugger
    return (
      <form onSubmit={this.props.deletePet}>
        <h4 className="title is-1 has-text-weight-medium has-text-centered">Are you sure you want to delete?</h4>
        <div className="buttons is-centered">
                  <div className="control">
                    <p>
                      <button className='button is-medium is-danger'>Delete</button>
                    </p>
                  </div>
                </div>
      </form>
    )
  }
}