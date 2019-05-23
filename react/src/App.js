import React from 'react';

import Login from './Containers/Login';
import Clients from './Containers/Clients';
import Pets from './Containers/Pets';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    loggedIn: !!localStorage.getItem('JW_Token')
  }

  logout = () => {
    localStorage.clear();
    this.setState({loggedIn: false});
    window.location.href ='/';
  }

  render = () => {
    return (
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/clients/">Clients</Link>
        <br />
        <Link to="/Pets/">Pets</Link>
        {/* <a href="#" onClick={this.logout}>Logout</a> */}
  
  
        {/* <Link to="/clients/new">Add a Client</Link> */}
  
        <Route exact path="/" component={this.state.loggedIn ? Clients : Login} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/clients/" component={Clients} /> */}
        <Route exact path="/Pets/" component={Pets} />
        {/* <Route exact path="/clients/new" component={() => <h1>Add a Client</h1>} /> */}
      </BrowserRouter>
    );
  }

}

export default App;
