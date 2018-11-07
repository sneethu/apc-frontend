import React, { Component } from 'react';
import {Route} from "react-router";

import logo from './logo.svg';
import './App.css';

import LoginPage from './Pages/Login/Page'; 
import Main from './Components/Main/Component';
import ListMeeting from './Pages/Meeting/List';
import Menu from './Components/Menu/Component'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <LoginPage/>
        <Main>
          {/**
          <Route path="/login" component={LoginPage}/>
          <Route path="/registration" component={RegistrationPage}/>
          <Route path="/" exact component={RegistrationPage}/>
          */}
          <Menu/>
          <ListMeeting/>
        </Main>
      </div>
    );
  }
}

export default App;
