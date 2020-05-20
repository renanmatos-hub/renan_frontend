import axios from 'axios';
const api = axios.create({
    baseURL: 'https://livros-para-ler-postgres.herokuapp.com'
})
export default api;