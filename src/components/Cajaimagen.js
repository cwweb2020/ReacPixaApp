import React from 'react';

const Cajaimagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.i;
  
   return (
      <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card">
              <img src={previewURL} alt={tags} className="card-img-top"></img>
              <div className="card-body">
                   <p className="card-text">{likes} Me gusta</p>
                   <p className="card-text">{views} Vistas</p>

                   <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver Imagen</a>
              </div>
          </div>

      </div>
   )
}

export default Cajaimagen;