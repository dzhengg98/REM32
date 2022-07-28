import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImageIndexItem = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="image-display-main">
      <Link to={`/images/${props.image.id}`} className="image-link">
        <img src={props.image.imageUrl} className="image-display" draggable="false" alt={`${props.image.id}`}/>
        <p className="image-display-title">{props.image.title}</p>
      </Link>
    </div>
  )
};

export default ImageIndexItem;