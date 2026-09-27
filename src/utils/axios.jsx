import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {accept: 'application/json', 
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmY2NzdhNzRkOWE3MzM1ZDQxNDM3ZjE0NTU2ZmM0ZCIsIm5iZiI6MTc4NjYyMTU0Mi40MDIsInN1YiI6IjZhN2RhZTY2MzdlZjFiNzJlZGVjMWY4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18xKCf0Sjj1QZxYW3C60QzFGFxIGhL8XE91OHiYRxao'}
});

export default instance;