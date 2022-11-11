import axios from 'axios';

const API = axios.create(''); //backend host  {baseURL:'http://localhost:5000'}

export const visitorSignIn = (emp) => API.post('/signin',emp)