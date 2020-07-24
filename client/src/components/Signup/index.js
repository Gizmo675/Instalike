import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const history = useHistory()

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {name, password, email};
  //   fetch("/signup",{
  //     method:"post",
  //     headers:{
  //       "Content-Type":"applicaton/json"
  //     },
  //     body:{data}
  //   }).then(res=>res.json())
  //   setEmail('');
  //   setName('');
  //   setPassword('');
  // }

  const postData = ()=>{
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name, password, email})
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: data.error, classes:"#ff5252 red accent-2"});
        return console.log(data.error);
      } else{
        M.toast({html:data.message, classes:"#1de9b6 teal accent-3"});
        console.log(data.message)
        history.push('/login');
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="mycard">
      {/* <form onSubmit={handleSubmit}> */}
        <div className="card auth-card">
          <h2>InstaLike</h2>
            <input 
              type="text"
              placeholder="Pseudo"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
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
              Signup
            </button>
            <h5>
              <Link to="/login">Deja un compte ?</Link>
            </h5>
        </div>
      {/* </form> */}
    </div>
  )
}

export default Signup