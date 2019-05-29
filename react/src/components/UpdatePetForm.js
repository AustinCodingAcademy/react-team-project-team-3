import React, { Component } from 'react';
import "bulma/css/bulma.css";

export default class UpdatePetForm extends Component {
    render() {
      debugger
      return (
        <form onSubmit={this.props.updatePet}>
          <div className="container">
            <h1 className="title is-1 has-text-weight-medium has-text-centered">Update Pet</h1>
            <div className="field">
              <div className='is-grouped is-grouped-centered'>
  
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Client ID</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded">
                        <input name="clientId" id="clientId" className="input" type="text" placeholder="Name"></input>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Pet ID</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded">
                        <input name="id" id="id" className="input" type="text" placeholder="Name"></input>
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded">
                        <input name="name" id="name" className="input" type="text" placeholder="Name"></input>
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Gender</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded">
                        <input name="gender" id="gender" className="input" type="text" placeholder="Gender"></input>
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Altered</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded">
                        <input name="altered" id="altered" className="input" type="text" placeholder="Altered"></input>
                      </p>
                    </div>
                  </div>
                </div>
  
                <br></br>
  
  
                <div className="buttons is-centered">
                  <div className="control">
                    <p>
                      <button className='button is-link'>Save</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      );
    }
  }
