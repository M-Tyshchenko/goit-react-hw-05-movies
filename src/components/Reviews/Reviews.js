import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const fetchedMovieReviews = await fetchMovieReviews(movieId);
        setReviews(fetchedMovieReviews);
      } catch {
        toast.error('Oops! Something wrong. Try to reload page');
      }
    }

    getMovieReviews();
  }, [movieId]);

  return (
    <section>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <h2>No reviews</h2>}
      <Toaster />
    </section>
  );
};

export default Reviews;
