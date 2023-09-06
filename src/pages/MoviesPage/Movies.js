import toast, { Toaster } from 'react-hot-toast';
import { FormInput, Section, StyledLink } from './Movies.styled';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from 'components/api';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStringValue = searchParams.get('query') ?? '';

  const [query, setQuery] = useState(queryStringValue);
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    async function getMovies() {
      try {
        const films = await fetchMoviesByQuery(query);

        if (!films.length) {
          throw new Error();
        }

        setMovies(films);
      } catch {
        toast.error('Oops! No movies for this query');
        setMovies([]);
      }
    }

    getMovies();
  }, [query]);

  return (
    <>
      <Section>
        <form
          onSubmit={event => {
            event.preventDefault();
            const queryInput = event.target.elements.query.value;

            if (queryInput.trim() === '') {
              toast.error('Field must not be empty');
              return;
            }

            setQuery(queryInput);

            setSearchParams({ query: queryInput });

            event.target.reset();
          }}
        >
          <FormInput type="text" name="query" placeholder="Search movies" />
          <button type="submit">Search</button>
        </form>
      </Section>

      <Section>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </li>
          ))}
        </ul>
      </Section>

      <Toaster />
    </>
  );
};

export default Movies;
