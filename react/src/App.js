import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from './containers/Login';
import Clients from './containers/Clients';

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
        <a href="#" onClick={this.logout}>Logout</a>
  
  
        {/* <Link to="/clients/new">Add a Client</Link> */}
  
        <Route exact path="/" component={this.state.loggedIn ? Clients : Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/clients/" component={Clients} />
        {/* <Route exact path="/clients/new" component={() => <h1>Add a Client</h1>} /> */}
      </BrowserRouter>
    );
  }

}

export default App;
