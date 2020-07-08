import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Gizmo</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1593444461581-b5ae72d3b637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
        </div>
        <div className="card-content">
          <i className="material-icons favorite">favorite</i>
          <h6>
            Titre
          </h6>
          <p>
            This is my amazing post
          </p>
          <input type="text" placeholder="Ajouter un commentaire" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Gizmo</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1593291600870-0f5fd4d32794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons favorite">favorite</i>
          <h6>
            Titre
          </h6>
          <p>
            This is my amazing post
          </p>
          <input type="text" placeholder="Ajouter un commentaire" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Gizmo</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1593948979905-2b90a8c06363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons favorite">favorite</i>
          <h6>
            Titre
          </h6>
          <p>
            This is my amazing post
          </p>
          <input type="text" placeholder="Ajouter un commentaire" />
        </div>
      </div>
    </div>
  )
}

export default Home