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
        <Text>
          <p>Powered by the</p>
          <div className="rawg">
            <a href="https://rawg.io/" target="_blank" rel="noreferrer">
              RAWG
            </a>
          </div>
          <p>Video Games Database</p>
        </Text>
      </Content>
    </Wrapper>
  );
}
