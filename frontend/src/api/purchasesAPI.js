import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const purchasesAPI = () => {

  const listUserPurchases = async ({id}) => {
    const response = await axios.get(`${API_BASE_URL}/purchases/users/${id}`);
    console.log(response);
    return response.data.data;
  };
  
  const postPurchase = async ({ datapost }) => {
    const response = await axios.post(`${API_BASE_URL}/purchases/create`, datapost);
    return response.data.data;
}

  return {
    listUserPurchases,
    postPurchase
  }

}

export default purchasesAPI;
