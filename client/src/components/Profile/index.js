import React, {useEffect, useState, useContext} from 'react'
import {UserContext} from '../../App'
import './profile.css'

const Profile = () => {

const {state, dispatch} = useContext(UserContext)

const [mypics, setPics] = useState([]);

useEffect(()=>{
    fetch('/mypost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
      .then(result=>{
        // console.log(result)
        setPics(result.mypost)
    })
  }, [])

  return (
    <div className="profile">
      <div className="profile-banner">
        <div className="profile-picture">
          <img 
            src="https://images.unsplash.com/photo-1548403119-4f9f60f7c064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
            alt="profile"
          />
        </div>
        <div>
        <h4>{state?state.name:"Chargement"}</h4>
          <div className="profile-info">
            <h6>10 posts</h6>
            <h6>450 followers</h6>
            <h6>100 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {
          mypics.map(item=>{
            return(
              <img className="item" src={item.picture} alt={item.title} key={item._id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Profile