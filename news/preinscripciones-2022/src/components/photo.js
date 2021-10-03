import React from 'react'

function Photo(props){
    return(
        <div className="imagesNew imagesNew-2">
        <figure className="imgContainer-2">
          <img src={props.link} alt={props.alt} />
        </figure>
      </div>
    )
}

export default Photo