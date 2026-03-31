// src/services/xano.js
const XANO_BASE_URL = 'https://YOUR_XANO_INSTANCE_URL'; // Replace with your Xano URL

export const xanoFetch = async (endpoint, options = {}) => {
  const url = `${XANO_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      // Add Auth token here later if needed:
      // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  };

  const response = await fetch(url, { ...defaultOptions, ...options });

  if (!response.ok) {
    throw new Error(`Xano Error: ${response.statusText}`);
  }

  return response.json();
};