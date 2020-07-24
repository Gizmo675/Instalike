import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

const CreatePost = ()=>{

  const history = useHistory()
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(()=>{
    if(url){
      fetch("/createpost",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          title,
          body,
          pic:url
        })      
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
          M.toast({html: data.error, classes:"#ff5252 red accent-2"});
          return console.log(data.error);
        } else{
          M.toast({html:"Post envoyé", classes:"#1de9b6 teal accent-3"});
          history.push('/');
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  },[url])

  const postDetails = ()=>{
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "InstaLike");
    data.append("cloud_name","gizmo675");

    fetch("	https://api.cloudinary.com/v1_1/gizmo675/image/upload",{
      method:"post",
      body:data
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.url)
      setUrl(data.url)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return(
    <div className="card input-file">
      <h2>InstaLike</h2>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn waves-effect waves-light blue-grey">
          <span>Photo</span>
          <input
            type="file"
            onChange={(e)=>setImage(e.target.files[0])}
          />
        </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      </div>
      <button
        className="btn waves-effect waves-light blue-grey"
        type="submit"
        name="action"
        onClick={()=>postDetails()}
      >
        Valider
      </button>
    </div>
  )
}

export default CreatePost