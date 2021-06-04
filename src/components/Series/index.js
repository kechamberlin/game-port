import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Wrapper } from './Series.styles';

export default function Series({ name, gameId, image }) {
  return (
    <div>
      <Wrapper>
        <Link to={`/${gameId}`}>
          <Image src={image} alt="game-thumbnail" />
        </Link>
        <h3>{name}</h3>
      </Wrapper>
    </div>
  );
}
