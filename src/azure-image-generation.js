import axios from 'axios';

const generateImage = async (prompt, apiKey, endpoint) => {
  const apiUrl = `${endpoint}/v1/images`;

  console.log('API URL:', apiUrl);

  try {
    const response = await axios.post(
      apiUrl,
      { prompt },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error generating image:', error.message);
    throw error;
  }
};

const isConfigured = (apiKey, endpoint) => {
  return Boolean(apiKey && endpoint);
};

export { generateImage, isConfigured };
