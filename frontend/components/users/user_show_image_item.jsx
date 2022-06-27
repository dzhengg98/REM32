import React from 'react';
import { Link } from 'react-router-dom';

const UserShowImageItem = (props) => {
  return (
    <div className="user-show-image-container">
      <Link to={`/images/${props.image.id}`}>
        <img src={props.image.imageUrl} className="user-show-image"/>
        <p className="user-show-image-title">{props.image.title}</p>
      </Link>
    </div>
  )
};

export default UserShowImageItem;