const axios = require('axios');

const api = axios.create({
    baseURL: 'https://swapi.dev/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

module.exports = api;