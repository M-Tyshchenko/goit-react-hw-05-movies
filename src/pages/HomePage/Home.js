import { fetchPopularMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { HomeTitle, MovieListItem, Section, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const films = await fetchPopularMovies();

        if (!films.length) {
          throw new Error();
        }

        setMovies(films);
      } catch {
        toast.error('Oops! Something wrong. Try to reload page');
      } finally {
        setLoading(false);
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

      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="tomato"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
          }}
          wrapperClassName=""
          visible={true}
        />
      )}

      <Toaster />
    </Section>
  );
};

export default Home;
