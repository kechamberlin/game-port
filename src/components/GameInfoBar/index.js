import React from 'react';
import { Content, Wrapper } from './GameInfoBar.styles';

export default function GameInfoBar({ game }) {
  return (
    <div>
      <Wrapper>
        <Content>
          <div className="column">
            <div>
              <h1>Developer{game.developers.length > 1 ? 's' : ''}</h1>
              <p>
                {game.developers.map((developer) => developer.name).join(', ')}
              </p>
            </div>
          </div>
          <div className="column">
            <div>
              <h1>Publisher{game.publishers.length > 1 ? 's' : ''}</h1>
              <p>
                {game.publishers.map((publisher) => publisher.name).join(', ')}
              </p>
            </div>
          </div>
          <div className="column">
            <div>
              <h1>Genre{game.genres.length > 1 ? 's' : ''}</h1>
              <p>{game.genres.map((genre) => genre.name).join(', ')}</p>
            </div>
          </div>
        </Content>
      </Wrapper>
    </div>
  );
}
