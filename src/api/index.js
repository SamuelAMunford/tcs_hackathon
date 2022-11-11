import axios from 'axios';

const API = axios.create({baseURL:'https://hackkathon22.herokuapp.com/'}); //backend host  {baseURL:'http://localhost:5000'}

export const visitorSignIn = (emp) => API.post('/',emp)