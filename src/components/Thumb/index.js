import React from 'react';
import { Image } from './Thumb.styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Thumb({ image, gameId, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${gameId}`}>
          <Image src={image} alt="game-thumbnail" />
        </Link>
      ) : (
        <Image src={image} alt="game-thumbnail" />
      )}
    </div>
  );
}

Thumb.propTypes = {
  image: PropTypes.string,
};
