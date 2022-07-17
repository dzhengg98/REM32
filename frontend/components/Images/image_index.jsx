import React, { useEffect } from 'react';
import ImageIndexItem from './image_index_item';

const ImageIndex = (props) => {

  useEffect(() => {
    props.fetchImages();
    props.fetchUsers();
  }, []);

  return (
    <div className="images-gallery-container">
      {
        props.images.reverse().map((image) => <ImageIndexItem key={image.id} image={image} />)
      }
    </div>
  )

};

export default ImageIndex;