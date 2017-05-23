import axios from 'axios';
import qs from 'qs';

const API_URL = 'https://api.unsplash.com';
const AUTH = 'Client-ID 454087647775b190c574339cb2994716b17ef2f83ad11838d0ef0dac2d102e66';
// steal Trello LOL

export default () => {
  const query = qs.parse(window.location.search.replace('?', '')).query;
  const featured = qs.parse(window.location.search.replace('?', '')).featured;
  return axios({
    method: 'get',
    url: `${API_URL}/photos/random`,
    headers: {
      Authorization: AUTH
    },
    params: {
      featured: featured || true,
      query,
      count: 30
    }
  }).then(response => Promise.resolve({
    photos: response.data,
    photo: response.data[0],
    limit: response.headers['x-ratelimit-limit'] * 1,
    remaining: response.headers['x-ratelimit-remaining'] * 1
  }));
}
