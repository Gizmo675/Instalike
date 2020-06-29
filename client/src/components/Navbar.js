import React from 'react'

const Navbar = ()=>{
  return(
    <nav>
      <div className="nav-wrapper dark">
        <a href="/" className="brand-logo left">InstaLike</a>
        <ul id="nav-mobile" className="right">
          <li><a href="/Login">Login</a></li>
          <li><a href="/Signup">Signup</a></li>
          <li><a href="Profile">Profile</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar