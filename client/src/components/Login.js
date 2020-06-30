import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaLike</h2>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="btn waves-effect waves-light blue-grey" type="submit" name="action">Login</button>
          <h5>
            <Link to="/signup">Pas encore enregistré ?</Link>
          </h5>
      </div>
    </div>
  )
}

export default Login