import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const productsAPI = () => {

  const listAllProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.data;
  };

  const getOneProduct = async ({id}) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data.data;
  };

  return {
    listAllProducts,
    getOneProduct,
  }

}

export default productsAPI;
