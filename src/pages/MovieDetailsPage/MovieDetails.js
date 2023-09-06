import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { HiMiniArrowLongLeft } from 'react-icons/hi2';
import { fetchMovieById } from 'components/api';
import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import {
  AdditionalInfoList,
  BackBtn,
  Container,
  Hero,
  HeroDescrContainer,
  Section,
  SubTitle,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState();

  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const fetchedMovie = await fetchMovieById(movieId);
        setMovie(fetchedMovie);

        if (movie) {
          setGenres(movie.genres.map(genre => genre.name).join(' '));
        }
      } catch {
        toast.error('Oops! Something wrong. Try to reload page');
      }
    }

    getMovieDetails();
  }, [movieId, movie]);

  return (
    <Container>
      <BackBtn to={location?.state?.from ?? '/'}>
        <HiMiniArrowLongLeft size="25" />
        Back
      </BackBtn>

      {movie && (
        <>
          <Section>
            <Hero>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={300}
              />
              <HeroDescrContainer>
                <Title>
                  {movie.title} ({new Date(movie.release_date).getFullYear()})
                </Title>
                <p>User score: {movie.vote_average}</p>
                <SubTitle>Overview</SubTitle>
                <p>{movie.overview}</p>
                <SubTitle>Genres</SubTitle>
                <p>{genres}</p>
              </HeroDescrContainer>
            </Hero>
          </Section>

          <hr />

          <Section>
            <SubTitle>Additional information</SubTitle>
            <AdditionalInfoList>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </AdditionalInfoList>

            <Toaster />
          </Section>

          <hr />

          <Outlet />
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
