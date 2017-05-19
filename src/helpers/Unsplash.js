import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const AUTH = 'Client-ID 68115450b21d29f712e08ebf8c6389f38f4e6f223d97157f77e5076dc64e483f';

export default () => {
  return axios({
    method: 'get',
    url: `${API_URL}/photos/random`,
    headers: {
      Authorization: AUTH
    },
    params: {
      featured: true,
      query: 'girl'
    }
  }).then(response => Promise.resolve({
    photo: response.data,
    limit: response.headers['x-ratelimit-limit'] * 1,
    remaining: response.headers['x-ratelimit-remaining'] * 1
  }));
}
