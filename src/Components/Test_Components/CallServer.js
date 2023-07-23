import React, { useState, useContext } from 'react';
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider';
import axios from 'axios';

const CallServer = () => {
  const [file, setFile] = useState(null);
  const API = useContext(apiEndpointContext)

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('Image', file);

    try {

      const response = await axios.patch(API.gabExpressApi + "/users", formData, {withCredentials: true, headers: {"Content-Type": 'multipart/form-data'}})

      if (response.ok) {
        console.log('File uploaded successfully!');
      } else {
        console.error('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default CallServer;
