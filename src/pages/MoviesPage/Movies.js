import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();

          if (event.target.elements.query.value.trim() === '') {
            toast.error('Field must not be empty');
            return;
          }
        }}
      >
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>

      <Toaster />
    </div>
  );
};

export default Movies;
