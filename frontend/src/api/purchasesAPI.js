import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/purchases';

const purchasesAPI = () => {

  const listUserPurchases = async ({ id }) => {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data.data;
  };

  const postPurchase = async ({ datapost }) => {
    const response = await axios.post(`${API_BASE_URL}/create`, datapost);
    return response.data.data;
  };

  const listAllPurchases = async () => {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data.data;
  };

  const getOnePurchase = async ({ id }) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data.data;
  };
  
  return {
    listUserPurchases,
    postPurchase,
    listAllPurchases,
    getOnePurchase,
  }

}

export default purchasesAPI;
