import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profil from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import CreatePost from './components/CreatePost'

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
      <Route path="/Profil">
        <Profil />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/CreatePost">
        <CreatePost />
      </Route>
    </BrowserRouter>
  )
}

export default App;
