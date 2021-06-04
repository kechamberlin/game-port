import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ backdrop }) => (backdrop ? `url(${backdrop})` : '#000')};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateGameInfo 1s;

  @keyframes animateGameInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    min-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
      text-align: center;
    }
  }

  p {
    white-space: pre-wrap;
    line-height: 1.6;
  }

  .summary {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .info-container {
    display: flex;
    justify-content: space-evenly;
    text-align: center;

    h3 {
      font-size: var(--fontMed);

      @media screen and (max-width: 768px) {
        font-size: var(--fontSmall);
      }

      @media screen and (max-width: 375px) {
        font-size: 0.9rem;
      }
    }

    @media screen and (max-width: 376px) {
      display: block;
      h3 {
        font-size: 1rem;
      }
    }
  }

  .metascore {
    margin: auto;
    margin-bottom: 16px;
    width: 5rem;
    background: #66cc32;
    font-size: var(--fontSuperBig);
    font-weight: bold;
    border-radius: 6px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }

    @media screen and (max-width: 376px) {
      width: 3rem;
    }
  }

  .mobile-line {
    @media screen and (max-width: 376px) {
      border-top: 1px solid gray;
    }
  }
`;
