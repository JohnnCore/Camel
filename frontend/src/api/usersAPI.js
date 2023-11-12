import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const usersAPI = () =>{
  const listAllUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/users/list`);
    return response.data.data;
  };
  
  return{
    listAllUsers,
  }

}

export default usersAPI;
