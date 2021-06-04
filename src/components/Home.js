import React from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Button from './Button';
import Footer from './Footer';
import Grid from './Grid';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Thumb from './Thumb';

export default function Home() {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid
        header={searchTerm ? `Search Results for '${searchTerm}'` : 'All Games'}
      >
        {state.results.map((game) => (
          <Thumb
            key={game.id}
            clickable
            image={game.background_image}
            gameId={game.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.next != null && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
      {!loading && <Footer />}
    </div>
  );
}
