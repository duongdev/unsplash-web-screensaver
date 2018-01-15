import axios from 'axios';

// const API_URL = 'https://remote.duongdev.me/status';
const API_URL = 'http://192.168.1.220:8125/status';
// const API_URL = 'http://localhost:3000/status';

export default () => axios.get(API_URL)
  .then(response => Promise.resolve(response.data));
