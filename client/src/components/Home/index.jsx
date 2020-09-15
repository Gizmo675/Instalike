/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useContext } from 'react'
// eslint-disable-next-line import/no-cycle
import { UserContext } from '../../App'
import './home.css'

const Home = () => {
  const [data, SetData] = useState([])
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    fetch('/allpost', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        SetData(result.posts)
      })
  }, [])

  const likePost = (id) => {
    fetch('/like', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result
          }
          return item
        })
        SetData(newData)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  const unlikePost = (id) => {
    fetch('/unlike', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result
          }
          return item
        })
        SetData(newData)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  const makeComment = (text, postId) => {
    fetch('/comment', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result
          }
          return item
        })
        SetData(newData)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  const deletePost = (postid) => {
    fetch(`/deletepost/${postid}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
        const newData = data.filter((item) => {
          return item._id !== result._id
        })
        SetData(newData)
      })
  }
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h5>
              {/* {item.author.name}
              {item.author._id === state._id && (
                <i
                  className="material-icons delete"
                  style={{ float: 'right' }}
                  onClick={() => deletePost(item._id)}
                >
                  delete
                </i>
              )} */}
            </h5>
            <div className="card-image">
              <img src={item.picture} alt={item._id} />
            </div>
            <div className="card-content">
              <i className="material-icons favorite">favorite</i>
              {item.likes.includes(state._id) ? (
                <i
                  className="material-icons"
                  onClick={() => {
                    unlikePost(item._id)
                  }}
                >
                  thumb_down
                </i>
              ) : (
                  <i
                    className="material-icons"
                    onClick={() => {
                      likePost(item._id)
                    }}
                  >
                    thumb_up
                  </i>
                )}
              <h6> {item.likes.length} like </h6>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              {item.comments.map((record) => {
                return (
                  <h6 key={record._id}>
                    <span>{record.author.name}</span>
                    {record.text}
                  </h6>
                )
              })}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  makeComment(e.target[0].value, item._id)
                }}
              >
                <input type="text" placeholder="Ajouter un commentaire" />
              </form>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
