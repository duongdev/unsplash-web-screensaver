import axios from 'axios';

const API_URL = 'https://remote.duongdev.me/status';
// const API_URL = 'http://localhost:3000/status';

export default () => axios.get(API_URL)
  .then(response => Promise.resolve(response.data));
