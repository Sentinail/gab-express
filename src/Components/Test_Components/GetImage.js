import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const getImageData = async () => {
      try {
        const response = await axios.post('http://localhost:9000/images/food-item-images', {
          item_id: '4',
          item_name: 'porridge',
          extension_name: 'jpg',
        }, {
          responseType: 'arraybuffer', // Receive image as binary data
          headers: { 'Content-Type': 'application/json' }, // Specify the content type of the request body
        });

        // Convert the binary data to a Blob (image) URL
        const blob = new Blob([response.data], { type: 'image/jpeg' });
        setImageData(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    getImageData();
  }, []);

  return (
    <div>
      {imageData ? (
        <img src={imageData} alt="Food Item" style={{ maxWidth: '300px' }} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageComponent;

