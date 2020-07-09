import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {UserContext} from '../App'

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)

  const postData = ()=>{
    fetch("/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.error){
        M.toast({html: data.error, classes:"#ff5252 red accent-2"});
        return console.log(data.error);
      } else{
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({type:"USER", payload:data.user})
        M.toast({html:"Connecté !", classes:"#1de9b6 teal accent-3"});
        history.push('/');
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaLike</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light blue-grey"
          type="submit"
          name="action"
          onClick={()=>postData()}
        >
        Login
        </button>
        <h5>
        <Link to="/signup">Pas encore enregistré ?</Link>
        </h5>
      </div>
    </div>  
  )
}

export default Login