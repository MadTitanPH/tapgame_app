import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://calm-reaches-52714.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default Api;