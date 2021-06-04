import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Wrapper } from './BreadCrumb.styles';

export default function BreadCrumb({ gameName }) {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{gameName}</span>
      </Content>
    </Wrapper>
  );
}
