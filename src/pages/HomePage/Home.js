import { fetchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { HomeTitle, MovieListItem, Section, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const films = await fetchMovies();

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
            <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          </MovieListItem>
        ))}
      </ul>
      <Toaster />
    </Section>
  );
};

export default Home;
