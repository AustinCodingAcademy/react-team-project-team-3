import React, { Component } from 'react';
import "bulma/css/bulma.css";

export default class UpdateClientForm extends Component {
  render() {
    debugger
    return (
      <form onSubmit={this.props.updateClient}>
      <div className="container">
        <h1 className="title is-1 has-text-weight-medium has-text-centered">Add A Client</h1>
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
              <div className="field-label">
                <label className="label">Phone Number</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="field has-addons">
                    <p className="control">
                      <a className="button is-static">
                        +1
                      </a>
                    </p>
                    <p className="control is-expanded">
                      <input name="phoneNumber" id='phoneNumber' className="input" type="text" placeholder="Phone Number"></input>
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Address</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control is-centered">
                    <input className="input" id="address" name="address" type="text" placeholder="Address"></input>
                  </div>
                </div>
              </div>
            </div>

            <br></br>


            <div className="buttons is-centered">
              <div className="control">
                <p>
                  <button className='button is-link'>Submit</button>
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
