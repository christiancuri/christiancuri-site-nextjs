import Axios from 'axios';

export const api = Axios.create({
  // baseURL: 'https://christiancuri.dev/api',
  baseURL: 'http://localhost:5000/api',
});
