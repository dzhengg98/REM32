import React from 'react';

const ImageIndexItem = (props) => {
  return (
    <li>
      <h2>{props.image.title}</h2>
      <p>{props.image.description}</p>
    </li>
  )
};

export default ImageIndexItem;