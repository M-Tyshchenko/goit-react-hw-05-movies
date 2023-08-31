import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyle';
import Home from 'pages/HomePage/Home';
import Movies from 'pages/MoviesPage/Movies';
import MovieDetails from 'pages/MovieDetailsPage/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFoundPage/NotFound';
import { Container, HeaderNavigation, NavList, StyledLink } from './App.styled';

export const App = () => {
  return (
    <Container>
      <HeaderNavigation>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
      </HeaderNavigation>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyles />
    </Container>
  );
};
