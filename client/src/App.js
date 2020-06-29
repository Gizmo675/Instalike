import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
    </BrowserRouter>
  )
}

export default App;
