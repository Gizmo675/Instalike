import React, {useEffect, createContext, useReducer, useContext} from 'react';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profil from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import CreatePost from './components/Createpost'

// reducers
import {userReducer, initialState} from './reducers/userReducer'

export const UserContext = createContext();

const Routing = () => {

  const history = useHistory();
  const {state, dispatch} = useContext(UserContext);

  useEffect(()=>{
    // On recupere le profil utilisateur depuis localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    // SI il n'y a pas d'utilisateur, alors on redirige vers login sinon vers la home
    if(user){
      dispatch({type:"USER", payload:user});
      history.push('/');
    }else{
      history.push('/login');
    }
  },[]);

  return (
    <Switch>
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
    </Switch>
  )
}

function App() {

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
