import { fetchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

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
        toast.error('Oops! No movies for this query');
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
