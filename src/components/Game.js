import React from 'react';
import { useParams } from 'react-router'; // for gameId
import { useGameFetch } from '../hooks/useGameFetch';
import BreadCrumb from './BreadCrumb';
import Footer from './Footer';
import GameInfo from './GameInfo';
import GameInfoBar from './GameInfoBar';
import Grid from './Grid';
import NoInfo from './NoInfo';
import Series from './Series';
import Spinner from './Spinner';

export default function Game() {
  const { gameId } = useParams();
  const { state: game, loading, error } = useGameFetch(gameId);

  if (loading) return <Spinner />;

  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumb gameName={game.name} />
      <GameInfo game={game} />
      <GameInfoBar game={game} />
      {game.series.length > 0 ? (
        <Grid header="Games in Series">
          {game.series.map((series) => (
            <Series
              key={series.id}
              gameId={series.id}
              name={series.name}
              image={series.background_image}
            />
          ))}
        </Grid>
      ) : (
        <NoInfo game={game} />
      )}
      {!loading && <Footer />}
    </>
  );
}
