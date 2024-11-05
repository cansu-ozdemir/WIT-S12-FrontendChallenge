import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reqres.in/api'
});

export const fetchPageData = async () => {
    try {
        const response = await api.post('/workintech');
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};