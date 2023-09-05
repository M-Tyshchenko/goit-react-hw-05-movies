import toast, { Toaster } from 'react-hot-toast';
import { FormInput, Section, StyledLink } from './Movies.styled';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from 'components/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

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

            if (event.target.elements.query.value.trim() === '') {
              toast.error('Field must not be empty');
              return;
            }
            setQuery(event.target.elements.query.value);

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
              <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
            </li>
          ))}
        </ul>
      </Section>
      <Toaster />
    </>
  );
};

export default Movies;
