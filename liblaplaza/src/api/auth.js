import axios from 'axios';

const apiHost = 'http://localhost:3000'

export const registerUserRequest = user => axios.post(`${apiHost}/register`, user);