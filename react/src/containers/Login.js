import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import "bulma/css/bulma.css";


export default class Login extends Component {

  state = {
    loggedIn: false
  }

  onSubmit = async (e) => {
    e.preventDefault();
    //https://aca-spring-app-auth.herokuapp.com/api/login
    //username e.target.elements.username.value
    //password e.target.elements.password.value

    debugger
    console.log("This is e" + e);
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: e.target.username,
        password: e.target.password
      })
    }
    );


    const token = await response.text();
    console.log(token);
    localStorage.setItem('JW_Token', token);
    this.setState({ loggedIn: true });


  }


  render() {
    if (this.state.loggedIn) {

      return <Redirect to="/clients/add" />
    }
    return (

      <div className='container'>
      <div className="field">
      <div className='is-grouped is-grouped-centered'>
        <div className='field-label is-medium is-horizontal'>
          <div className='field is-horizontal'>
            <label for="username" className="label is-medium is-left">Username</label>
          </div>
          <p className='control has-icons-right'>
            <input className='input' name='username' id='exampleUsername' type='text' placeholder='Username'></input>
            <span className='icon is-small is-right'>
              <i className='fas fa-user'></i>
            </span>
          </p>
        </div>

        <div className='field-label is-medium'>
          <div className='field is-horizontal'>
            <label for="password" className="label is-medium is-left">Password</label>
          </div>
          <p className='control has-icons-right'>
            <input className='input' name='password' id='examplePassword' type='password' placeholder='Password'></input>
            <span className='icon is-small is-right'>
              <i className='fas fa-key'></i>
            </span>
          </p>
        </div>

        <div className='field'>
          <p className='control'>
            <a href="/clients/add" onClick={this.onSubmit} className='button is-link'>Submit</a>
          </p>
        </div>
      </div >
    </div>
    </div>
    );
  }
}
