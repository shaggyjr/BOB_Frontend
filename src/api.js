import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

// User APIs
export const loginUser = (userData) => API.post('/User/login', userData);
export const signupUser = (userData) => API.post('/User/signup', userData);
export const getUser = (userId) => API.get(`/User/${userId}`);

// Img APIs
export const getImgs = () => API.get('/img');
export const addImg = (imgData) => API.post('/img/add', imgData);
export const updateImg = (imgId, imgData) => API.put(`/img/update/${imgId}`, imgData);
export const deleteImg = (imgId) => API.delete(`/img/${imgId}`);
