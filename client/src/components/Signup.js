import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const postData = ()=>{
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"applicaton/json"
      },
      body:JSON.stringify({
        name:"",
        password:"",
        email:""
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error, classes:"#ff5252 red accent-2"})
      }
    }
    )

  }

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaLike</h2>
          <input 
            type="text"
            placeholder="Pseudo"
            value={name}
            onChange={(event)=>{setName(event.target.value)}
          } />
          <input
            type="text" placeholder="Email"
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
          />
          <button
            className="btn waves-effect waves-light blue-grey"
            type="submit"
            name="action"
            onClick={()=>postData()}
          >
            Signup
          </button>
          <h5>
            <Link to="/login">Deja un compte ?</Link>
          </h5>
      </div>
    </div>
  )
}

export default Signup