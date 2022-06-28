import React from 'react';
import { Link } from 'react-router-dom';

const ImageIndexItem = (props) => {
  // debugger
  return (
    <div className="image-display-main">
      <Link to={`/images/${props.image.id}`} className="image-link">
        <img src={props.image.imageUrl} className="image-display" />
        <p className="image-display-title">{props.image.title}</p>
      </Link>
    </div>
  )
};

export default ImageIndexItem;