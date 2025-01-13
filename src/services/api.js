import axios from "axios";


//Base da URL: https://api.themoviedb.org/3/
//URL DA API: movie/now_playing?api_key=f5c1ad4446f1990ecfa279ff6d0134a3&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
