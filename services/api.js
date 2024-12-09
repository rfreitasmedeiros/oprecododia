import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-produtos-9jmi.onrender.com', // Replace with your API base URL
    headers: { 'Content-Type': 'application/json' }
});

module.exports = api;