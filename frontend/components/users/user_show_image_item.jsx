import React from 'react';
import { Link } from 'react-router-dom';

const UserShowImageItem = (props) => {
  return (
    <div>
      <Link to={`/images/${props.image.id}`}>
        <img src={props.image.imageUrl}/>
        <p>{props.image.title}</p>
      </Link>
    </div>
  )
};

export default UserShowImageItem;