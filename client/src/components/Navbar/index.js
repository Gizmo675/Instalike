import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import "./navbar.css"

const Navbar = ()=>{
  const { state,dispatch } = useContext(UserContext);
  const history = useHistory();

  const renderList = ()=>{
    if(state){
      return [
        <li><Link to="/profil">Profil</Link></li>,
        <li><Link to="/createPost">Nouveau post</Link></li>,
        
          <button
            className="btn waves-effect waves-light red lighten-3"
            type="submit"
            name="action"
            onClick={()=>{
              localStorage.clear();
              dispatch({type:"CLEAR"})
              history.push('/login')
            }}
          >
            Deconnexion
          </button>
      ]
    }else{
      return[
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }

  return(
    <nav>
      <div className="nav-wrapper">
        <Link to={state ? "/" : "/login"} className="brand-logo left">Insta Like</Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar