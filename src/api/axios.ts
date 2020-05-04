import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VUE_APP_BASE_URI || 'http://localhost:8086',
  timeout: 20000,
});
export default client;
