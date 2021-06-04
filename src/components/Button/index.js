import React from 'react';
import { Wrapper } from './Button.styles';
import PropTypes from 'prop-types';

export default function Button({ text, callback }) {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
