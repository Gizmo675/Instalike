import React from 'react'

const CreatePost = ()=>{
  return(
    <div className="card input-file">
      <h2>InstaLike</h2>
      <input type="text" placeholder="Titre" />
      <input type="text" placeholder="Description" />
      <div className="file-field input-field">
        <div className="btn waves-effect waves-light blue-grey">
          <span>Photo</span>
          <input type="file" />
        </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      </div>
      <button className="btn waves-effect waves-light blue-grey" type="submit" name="action">Valider</button>
    </div>
  )
}

export default CreatePost