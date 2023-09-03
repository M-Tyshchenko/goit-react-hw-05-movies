import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/api';
import { ReviewsList, ReviewsListItem, Section } from './Reviews.styled';

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
    <Section>
      {reviews && (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsListItem key={review.id}>
              <p>{review.content}</p>
            </ReviewsListItem>
          ))}
        </ReviewsList>
      )}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      <Toaster />
    </Section>
  );
};

export default Reviews;
