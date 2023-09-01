import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/api';

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
      <section>
        <ul>
          {cast.map(actor => {
            let actorPhotoSrc = '';
            if (actor.profile_path !== null) {
              actorPhotoSrc = actor.profile_path;
            }
            // console.log(actorPhotoSrc);
            return (
              <li key={actor.id}>
                <img src={`${actorPhotoSrc}`} alt={actor.name} />
                <h2>{actor.name}</h2>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>

        <Toaster />
      </section>
    )
  );
};

export default Cast;
