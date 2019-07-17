import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 43746307b4f96d967ecd0056310aa5a2374d6b739688d9017daacd8b3c9bebcc'
    }
});