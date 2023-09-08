import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'components/api';
import {
  Form,
  FormInput,
  SearchBtn,
  Section,
  StyledLink,
} from './Movies.styled';

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
        <Form
          onSubmit={event => {
            event.preventDefault();
            const queryInput = event.target.elements.query.value;

            if (queryInput.trim() === '') {
              toast.error('Field must not be empty');
              return;
            }

            setQuery(queryInput);

            setSearchParams({ query: queryInput });
          }}
        >
          {queryStringValue ? (
            <FormInput type="text" name="query" value={queryStringValue} />
          ) : (
            <FormInput type="text" name="query" placeholder="Search movies" />
          )}

          <SearchBtn type="submit">Search</SearchBtn>
        </Form>
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
