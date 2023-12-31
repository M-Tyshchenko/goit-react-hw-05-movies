import axios from 'axios';

const apiKey = 'd75b3931766fcd9d8af4d3e3d05e08ca';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzViMzkzMTc2NmZjZDlkOGFmNGQzZTNkMDVlMDhjYSIsInN1YiI6IjY0ZjAzZjBmOTdhNGU2MDBlMWEyYTYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F63QQJ8TdpDJ8T-g_vkI8h2Ci_7mX806Y_mFFZ8UCYI';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchMoviesByQuery = async query => {
  const response = await axios.get('/search/movie', {
    params: {
      query,
      api_key: apiKey,
      language: 'en-US',
    },
  });
  return response.data.results;
};

export const fetchPopularMovies = async () => {
  const response = await axios.get('/trending/all/day', {
    params: {
      api_key: apiKey,
      language: 'en-US',
    },
  });
  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: apiKey,
    },
  });

  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: apiKey,
    },
  });

  const cast = response.data.cast.filter(
    person => person.known_for_department === 'Acting'
  );
  return cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: apiKey,
    },
  });
  return response.data.results;
};
