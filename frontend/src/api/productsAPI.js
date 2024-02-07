import axios from 'axios';
import useAuth from '../hooks/useAuth';

const API_BASE_URL = 'http://localhost:3000/products';

const productsAPI = () => {
  const {token} = useAuth();
  console.log(token);
  const listAllProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}`,
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    
    return response.data.data;
  };

  const getOneProduct = async ({ id }) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data.data;
  };

  const postProduct = async ( {formData} ) => {
    const response = await axios.post(`${API_BASE_URL}/create`, formData);
    return response.data.data;
  }

  const putProduct = async ({id, formData} ) => {
    const response = await axios.put(`${API_BASE_URL}/${id}/edit`, formData);
    return response.data.data;
  }

  const deleteProduct = async ({id} ) => {
    const response = await axios.delete(`${API_BASE_URL}/${id}/delete`);
    return response.data.data;
  }

  return {
    listAllProducts,
    getOneProduct,
    postProduct,
    putProduct,
    deleteProduct,
  }

}

export default productsAPI;
