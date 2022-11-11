import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'}); //backend host  {baseURL:'http://localhost:5000'}

export const visitorSignIn = (emp) => API.post('/',emp)