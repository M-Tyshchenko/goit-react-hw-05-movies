import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/api';
import { ActorName, CastList, CastListItem, Section } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const fetchedMovieCast = await fetchMovieCast(movieId);
        setCast(fetchedMovieCast);
      } catch {
        toast.error('Oops! Something wrong. Try to reload page');
      }
    }

    getMovieCast();
  }, [movieId]);

  return (
    cast && (
      <Section>
        <CastList>
          {cast.map(actor => {
            let actorPhotoSrc = '';
            if (actor.profile_path !== null) {
              actorPhotoSrc = actor.profile_path;
            }

            return (
              <CastListItem key={actor.id}>
                {actorPhotoSrc && (
                  <img
                    src={`https://image.tmdb.org/t/p/original${actorPhotoSrc}`}
                    alt={actor.name}
                    width={150}
                  />
                )}

                <ActorName>{actor.name}</ActorName>
                <p>Character: {actor.character}</p>
              </CastListItem>
            );
          })}
        </CastList>

        <Toaster />
      </Section>
    )
  );
};

export default Cast;
