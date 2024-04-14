import apiService from './apiService';

export const getProviders = async (page, limit) => {
  try {
    const response = await apiService.get(`providers?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching providers:', error);
    throw error;
  }
};

export const addProvider = async (providerData) => {
  try {
    const response = await apiService.post('add', providerData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding provider:', error);
    throw error;
  }
};

export const deleteProvider = async (id) => {
  try {
    const response = await apiService.delete(`${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting provider:', error);
    throw error;
  }
};

export default {
  getProviders,
  addProvider,
  deleteProvider
};
