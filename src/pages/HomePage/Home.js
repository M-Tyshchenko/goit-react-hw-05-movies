import { fetchPopularMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { HomeTitle, MovieListItem, Section, StyledLink } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    async function getMovies() {
      try {
        const films = await fetchPopularMovies();

        if (!films.length) {
          throw new Error();
        }

        setMovies(films);
      } catch {
        toast.error('Oops! Something wrong. Try to reload page');
      }
    }

    getMovies();
  }, []);

  return (
    <Section>
      <HomeTitle>Trending today</HomeTitle>
      <ul>
        {movies.map(movie => (
          <MovieListItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          </MovieListItem>
        ))}
      </ul>
      <Toaster />
    </Section>
  );
};

export default Home;
