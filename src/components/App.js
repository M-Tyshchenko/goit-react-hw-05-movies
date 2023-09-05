import { Route, Routes } from 'react-router-dom';
import Home from 'pages/HomePage/Home';
import Movies from 'pages/MoviesPage/Movies';
import MovieDetails from 'pages/MovieDetailsPage/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFoundPage/NotFound';
import { AppLayout } from './AppLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
