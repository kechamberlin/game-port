import React from 'react';
import { Content, Wrapper } from './Grid.styles';

export default function Grid({ header, children }) {
  return (
    <div>
      <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
      </Wrapper>
    </div>
  );
}
