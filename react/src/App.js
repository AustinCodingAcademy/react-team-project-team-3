import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './containers/Login';
import Clients from './containers/Clients';
import AddClient from './containers/AddClient';
import Pets from './containers/Pets';
import AddPet from './containers/AddPet';
import UpdatePet from './containers/UpdatePet';
import "bulma/css/bulma.css";
import DeletePet from './containers/DeletePet';
import UpdateClient from './containers/UpdateClient';



class App extends React.Component {
  state = {
    loggedIn: !!localStorage.getItem('JW_Token')
  }

  logout = () => {
    localStorage.clear();
    this.setState({ loggedIn: false });
    window.location.href = '/';
  }

  render = () => {
    return (
      <BrowserRouter>
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <img src={require('./images/DellLogo.png')} alt="DellLogo" width="55" height="55" />
             Dell Veterinary Hospital
          </div>

          <div id="navBarMenu" className="navbar-menu">
            <div className="navbar-start">

              <div className="navbar-item has-dropdown is-hoverable">
                <a href="/clients/add" className="navbar-link">Clients</a>
                <div className='navbar-dropdown'>
                  <a href="/clients/add" className='navbar-item'>Add Client</a>
                  <a href="/clients/list" className='navbar-item'>List Clients</a>
              </div>

              

              <div className="navbar-item has-dropdown is-hoverable">
                <a href="/pets/add" className="navbar-link">Pets</a>
                <div className='navbar-dropdown'>
                  <a href="/pets/add" className='navbar-item'>Add Pets</a>
                  <a href="/pets/list" className='navbar-item'>List Pets</a>
                </div>
              </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-info" href="\login">
                    <strong>Login</strong>
                  </a>
                  <a href="#" onClick={this.logout} className="button is-light">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          </nav>

          <br></br>

          <Route exact path="/" component={this.state.loggedIn ? Clients : Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/clients/list" component={Clients} />
          <Route exact path="/clients/add" component={AddClient} /> 
          <Route exact path="/pets/list" component={Pets} />
          <Route exact path="/pets/add" component={AddPet} />
          <Route exact path="/pets/update" component={UpdatePet} />
          <Route exact path="/pets/delete" component={DeletePet} />
          <Route exact path="/clients/update" component={UpdateClient} />
     
      </BrowserRouter>
    );
  }

}

export default App;
