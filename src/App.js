import React, { useState } from 'react';
import './index.css'; 

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageAnalysis = () => {
    // Add logic for image analysis (to be implemented in the next exercises)
    console.log('Image analysis triggered');
  };

  const handleImageGeneration = () => {
    // Add logic for image generation (to be implemented in the next exercises)
    console.log('Image generation triggered');
  };

  return (
    <div className="app-container">
      <h1>Image Analyzer and Generator</h1>
      <div>
        <label htmlFor="imageUrl">Enter Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleImageAnalysis}>Analyze Image</button>
        <button onClick={handleImageGeneration}>Generate Image</button>
      </div>
    </div>
  );
}

export default App;