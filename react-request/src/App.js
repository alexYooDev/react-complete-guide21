import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url =
        'https://react-request-b5a7a-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something is wrong');
      }

      const data = await response.json();
      console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchMovies();
  }, []);

  const handleAddMovie = async (movie) => {
    const response = await fetch(
      'https://react-request-b5a7a-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
  };

  /* promise chaining */

  // fetch('https://swapi.dev/api/films')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const transformedMovies = data.results.map((result) => {
  //       return {
  //         id: result.episode_id,
  //         title: result.title,
  //         openingText: result.opening_crawl,
  //         releaseDate: result.release_date,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   })
  //   .then(setIsLoading(false));

  let content = <p>Found No Movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={handleFetchMovies}>Fetch Movies</button>
      </section>

      <section>{content}</section>
      <section>
        <AddMovie onAddMovie={handleAddMovie} />
      </section>
    </React.Fragment>
  );
}

export default App;
