import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
  return(
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Insta Like</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/profil">Profil</Link></li>
          <li><Link to="/createPost">Nouveau post</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar