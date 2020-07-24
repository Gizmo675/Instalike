import React, {useState, useEffect} from 'react'
import './home.css'

const Home = () => {

  const [data,SetData] = useState([]);
  
  useEffect(()=>{
    fetch('/allpost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
      .then(result=>{
        // console.log(result)
        SetData(result.posts)
    })
  }, [])

  return (
    <div className="home">

    {
      data.map(item=>{
        return(
        <div className="card home-card" key={item._id}>
          <h5>{item.author.name}</h5>
          <div className="card-image">
            <img src={item.picture} />
          </div>
          <div className="card-content">
            <i className="material-icons favorite">favorite</i>
            <h6>
              {item.title}
            </h6>
            <p>
              {item.body}
            </p>
            <input type="text" placeholder="Ajouter un commentaire" />
          </div>
      </div>
        )
      })
    }

    </div>
  )
}

export default Home