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
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profil">
        <Profil />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/createPost">
        <CreatePost />
      </Route>
    </BrowserRouter>
  )
}

export default App;
