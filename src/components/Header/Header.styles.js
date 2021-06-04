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
`;

export const LogoImg = styled.img`
  width: 75px;
  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;
