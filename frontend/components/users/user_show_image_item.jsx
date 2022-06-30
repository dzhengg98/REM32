import React from 'react';
import { Link } from 'react-router-dom';

const UserShowImageItem = (props) => {
  return (
    <div className="user-show-image-container">
      <Link to={`/images/${props.image.id}`}>
        <img src={props.image.imageUrl} className="user-show-image"/>
      </Link>
    </div>
  )
};

export default UserShowImageItem;