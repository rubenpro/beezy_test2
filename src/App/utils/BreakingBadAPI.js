import axios from 'axios';

const API_BB_BASE_URL = 'https://www.breakingbadapi.com/api';

const API_BB = {
  getCharacterList: (quantity) =>
    axios.get(`${API_BB_BASE_URL}/characters/?limit=${quantity}`).then((res) => res.data),
  getCharacterDetail: (id) =>
    axios.get(`${API_BB_BASE_URL}/characters/${id}`).then((res) => res.data),
};

export default API_BB;
