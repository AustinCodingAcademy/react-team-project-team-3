import React, { Component } from 'react';
import AddClientForm from '../components/AddClientForm';
import ClientList from '../components/ClientList';

export default class Clients extends Component {
  state = {
    clients: []
  }

  componentDidMount = async () => {
    try {
      debugger
      const response = await fetch('/api/clients', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('JW_Token')}`
        }
      })
      const clients = await response.json();
      this.props.match.clientsList = clients
      this.setState({ 'clients': clients })
    } catch (error) {
      console.error(error)
    }
  }
  
  render() {
    debugger
    return (
      <div className='container'>
        <ClientList clientsList={this.state.clients} />
      </div>
    )
  }
}
