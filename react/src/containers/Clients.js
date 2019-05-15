import React, { Component } from 'react'


export default class Clients extends Component {
  state = {
    clients: []
  }

  componentDidMount = async () => {
    try {
      const clientResponse = await fetch ('/api/clients', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('JW_Token')}`
        }
      })
      const clients = await clientResponse.json();
      this.setState({clients:clients});
    }catch (error) {
      console.error(error)
    }

  }


  render() {
    return (
      <div>
        <ul>
          {this.state.clients.map(client => <li>{client.name}</li>)}
        </ul>
        
      </div>
    )
  }
}
