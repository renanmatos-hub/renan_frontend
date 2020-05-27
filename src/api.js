import axios from 'axios';
const api = axios.create({
    baseURL: 'https://livros-para-ler-react.herokuapp.com'
})
export default api;