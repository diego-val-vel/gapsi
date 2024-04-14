import apiService from './apiService';

const getWelcomeMessage = async () => {
  try {
    const response = await apiService.get('welcome');
    return response.data;
  } catch (error) {
    console.error('Error fetching welcome message:', error);
    throw error;
  }
};

export default getWelcomeMessage;
