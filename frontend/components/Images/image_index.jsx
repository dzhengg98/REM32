import React, { useEffect, useState } from 'react';
import ImageIndexItem from './image_index_item';
import sleep from '../../util/sleep';

const ImageIndex = (props) => {

  const { fetchImages, fetchUsers, images } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      const res = await fetchImages();
      await sleep(500);
      setIsLoading(false);
    }
    getImages();
    fetchUsers();
  }, []);

  return (
    <div className="images-gallery-container">
      {isLoading ? (
        <div className="loading-indicator-container">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
        </div>
      ) : (
        images.reverse().map((image) => <ImageIndexItem key={image.id} image={image} />)
      )
      }
    </div>
  )

};

export default ImageIndex;