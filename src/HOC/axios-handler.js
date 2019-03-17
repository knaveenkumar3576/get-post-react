import axios from 'axios';

const axiosHandler = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export default axiosHandler