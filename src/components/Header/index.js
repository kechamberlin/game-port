import React from 'react';
import { Wrapper, Content, LogoImg, Text } from './Header.styles';
import GamePortLogo from '../../images/joystick-logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link className="logo" to="/">
          Game <LogoImg src={GamePortLogo} alt="game-port-logo" /> Port
        </Link>
      </Content>
    </Wrapper>
  );
}
