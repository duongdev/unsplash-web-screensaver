import axios from 'axios';

const API_URL = 'https://remote.duongdev.me/status';

export default () => axios.get(API_URL)
  .then(response => Promise.resolve(response.data));
