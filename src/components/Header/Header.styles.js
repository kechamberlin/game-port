import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  padding: 20px 0;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: white;
  }

  .logo {
    font-family: 'Press Start 2P', cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--white);
  }

  .rawg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 900;
    text-decoration: none;
    letter-spacing: 5px;
    font-size: 1rem;
    padding: 0.25rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

export const LogoImg = styled.img`
  width: 75px;
  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;
