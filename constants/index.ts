const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const BASE_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const SEARCH_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export { BASE_URL, SEARCH_BASE_URL,IMG_PATH };
