import React from 'react';
import { Text } from './NoInfo.styles';

export default function NoInfo({ game }) {
  return (
    <Text>
      <h2>Sorry, RAWG has not provided series information for {game.name}.</h2>
    </Text>
  );
}
