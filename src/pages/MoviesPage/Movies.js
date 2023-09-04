import toast, { Toaster } from 'react-hot-toast';
import { FormInput, Section } from './Movies.styled';

const Movies = () => {
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
          }}
        >
          <FormInput type="text" name="query" placeholder="Search movies" />
          <button type="submit">Search</button>
        </form>
      </Section>

      <Section>
        {/* <ul>
        {movies.map(movie => (
          <MovieListItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          </MovieListItem>
        ))}
      </ul> */}
      </Section>
      <Toaster />
    </>
  );
};

export default Movies;
