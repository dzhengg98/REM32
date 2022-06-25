import React from 'react';
import { Link } from 'react-router-dom';

const ImageIndexItem = (props) => {
  return (
    <div className="image-display-main">
      <Link to={`/images/${props.image.id}`} className="image-link">
        <img src={props.image.imageUrl} className="image-display" />
      </Link>
    </div>
  )
};

export default ImageIndexItem;