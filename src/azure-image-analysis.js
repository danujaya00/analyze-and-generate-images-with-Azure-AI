import axios from 'axios';

const analyzeImage = async (imageUrl, subscriptionKey, endpoint) => {
  const apiUrl = `${endpoint}computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=caption&language=en&gender-neutral-caption=False`;

  console.log('API URL:', apiUrl);

  try {
    const response = await axios.post(
      apiUrl,
      { url: imageUrl },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error.message);
    throw error;
  }
};  

const isConfigured = (subscriptionKey, endpoint) => {
  return Boolean(subscriptionKey && endpoint);
};

export { analyzeImage, isConfigured };
