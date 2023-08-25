import axios from 'axios';

const apiHost = 'http://localhost:3000'

export const registerUserRequest = user => axios.post(`${apiHost}/register`, user);

export const loginUserRequest = user => axios.post(`${apiHost}/login`, user);
