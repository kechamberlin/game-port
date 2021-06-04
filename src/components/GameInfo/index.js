import React from 'react';
import Thumb from '../Thumb';
import { Wrapper, Content, Text } from './GameInfo.styles';

export default function GameInfo({ game }) {
  const releasedDate = new Date(game.released);
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const releasedString = releasedDate.toLocaleDateString('en-US', dateOptions);
  return (
    <Wrapper backdrop={game.background_image_additional}>
      <Content>
        <Thumb image={game.background_image} clickable={false} />
        <Text>
          <h1>{game.name}</h1>
          <h3 className="summary">Summary</h3>
          {game.description_raw ? (
            <p>{game.description_raw}</p>
          ) : (
            `Sorry, RAWG has not provided a description for ${game.name}.`
          )}

          <div className="info-container">
            <div className="mobile-line">
              <h3>RELEASED</h3>
              <p>{releasedString}</p>
            </div>
            <div className="score mobile-line">
              <h3>METASCORE</h3>
              <p className="metascore">
                {game.metacritic ? game.metacritic : 'N/A'}
              </p>
            </div>
            <div className="mobile-line">
              <h3>RATED</h3>
              {game.esrb_rating ? <p>{game.esrb_rating.name}</p> : <p>N/A</p>}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
}
