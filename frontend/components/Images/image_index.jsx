import React, { useEffect } from 'react';
import ImageIndexItem from './image_index_item';

const ImageIndex = (props) => {

  const { fetchImages, fetchUsers, images } = props;

  useEffect(() => {
    fetchImages();
    fetchUsers();
  }, []);

  return (
    <div className="images-gallery-container">
      {
        images.reverse().map((image) => <ImageIndexItem key={image.id} image={image} />)
      }
    </div>
  )

};

export default ImageIndex;