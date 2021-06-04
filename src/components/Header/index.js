import React from 'react';
import { Wrapper, Content, LogoImg, Text } from './Header.styles';
import GamePortLogo from '../../images/joystick-logo.svg';

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={GamePortLogo} alt="game-port-logo" />
      </Content>
    </Wrapper>
  );
}
