import axios from 'axios';

const v1 = axios.create({
   baseURL: 'https://api.spotify.com/v1'
});

export default v1;