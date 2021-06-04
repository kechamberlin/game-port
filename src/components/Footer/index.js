import React from 'react';
import { Wrapper } from '../Footer/Footer.styles';

export default function Footer() {
  return (
    <Wrapper>
      <a
        href="https://github.com/kechamberlin"
        target="_blank"
        rel="noreferrer"
      >
        &copy; Built by Kris Chamberlin | {new Date().getFullYear()}
      </a>
    </Wrapper>
  );
}
