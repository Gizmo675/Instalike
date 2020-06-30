import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="profile-banner">
        <div>
          <img style={{width:"10em", height:"10em", borderRadius:"5em"}} 
            src="https://images.unsplash.com/photo-1548403119-4f9f60f7c064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
          />
        </div>
        <div>
          <h4>Gizmo</h4>
          <div className="profile-info">
            <h6>10 posts</h6>
            <h6>450 followers</h6>
            <h6>100 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img className="item" src="https://images.unsplash.com/photo-1593338717285-fc56ada95667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80" />
        <img className="item" src="https://images.unsplash.com/photo-1589486924228-458f695b7c48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <img className="item" src="https://images.unsplash.com/photo-1593238739150-f9e0c3beb62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <img className="item" src="https://images.unsplash.com/photo-1593291515577-999ddd536e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <img className="item" src="https://images.unsplash.com/photo-1593387496698-11b5e92183db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <img className="item" src="https://images.unsplash.com/photo-1558334950-6594a1b96526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <img className="item" src="https://images.unsplash.com/photo-1593157327221-213b1df00998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <img className="item" src="https://images.unsplash.com/photo-1593359393721-8c301de4bf7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
        <img className="item" src="https://images.unsplash.com/photo-1593286880275-cc4aee0fb836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
      </div>
    </div>
  )
}

export default Profile