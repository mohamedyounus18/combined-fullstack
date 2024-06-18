// axiosUrl.js
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';  // Replace with your actual base URL

const apiUrl = axios.create({
    baseURL: baseUrl
});

export default apiUrl;
