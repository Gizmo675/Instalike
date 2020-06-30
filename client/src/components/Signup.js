import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaLike</h2>
          <input type="text" placeholder="Pseudo" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="btn waves-effect waves-light blue-grey" type="submit" name="action">Signup</button>
          <h5>
            <Link to="/login">Deja un compte ?</Link>
          </h5>
      </div>
    </div>
  )
}

export default Signup