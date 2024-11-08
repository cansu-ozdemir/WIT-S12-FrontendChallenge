import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reqres.in/api'
});

export const fetchPageData = () => {
    return api.post('/workintech')
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        throw error;
    });
};