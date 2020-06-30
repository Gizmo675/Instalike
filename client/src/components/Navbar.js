import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
  return(
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Insta Like</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
          <li><Link to="Profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar