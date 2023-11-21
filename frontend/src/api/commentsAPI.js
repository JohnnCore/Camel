import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const commentsAPI = () => {

  const listAllProductComments = async ({id}) => {
    const response = await axios.get(`${API_BASE_URL}/comments/products/${id}`);
    return response.data.data;
  };
  
  const postComment = async ({ datapost }) => {
    const response = await axios.post(`${API_BASE_URL}/comments/create`, datapost);
    return response.data.data;
}

  return {
    listAllProductComments,
    postComment
  }

}

export default commentsAPI;
