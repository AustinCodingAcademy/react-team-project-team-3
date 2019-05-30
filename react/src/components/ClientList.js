import React, { Component } from 'react'
import "bulma/css/bulma.css";

export default class ClientList extends Component {

  state = {
    clients: []
  }


  render() {
    debugger
    return (
      <section>
      <h1 className="title is-1 has-text-weight-medium has-text-centered">Clients</h1>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                </tr>
                </thead>
        {
          this.props.clientsList.map(client =>
                <tbody>
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.address}</td>
                  <td>{client.phoneNumber}</td>
                </tbody>)
        }
      </table>
      </section>
    )
  }
}
