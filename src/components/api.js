import axios from 'axios';

// const apiKey = 'd75b3931766fcd9d8af4d3e3d05e08ca';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzViMzkzMTc2NmZjZDlkOGFmNGQzZTNkMDVlMDhjYSIsInN1YiI6IjY0ZjAzZjBmOTdhNGU2MDBlMWEyYTYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F63QQJ8TdpDJ8T-g_vkI8h2Ci_7mX806Y_mFFZ8UCYI';

axios.defaults.baseURL = 'https://developer.themoviedb.org/reference';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchMovies = async () => {
  const response = await axios.get('/trending/get-trending');
  //   const response = await axios.get(`/?`, {
  //     params: {
  //       api_key: apiKey,
  //     },
  //   });
  console.log(response.results);
  return response.results;
};
