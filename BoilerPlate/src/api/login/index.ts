import axios from '../axios';

export const endpoints = {
    login: ''
};

export default {
    userLogin: () => axios.get(endpoints.login)
};