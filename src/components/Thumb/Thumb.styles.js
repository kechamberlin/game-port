import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 768px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      background-color: rgb(0, 0, 0);
    }
    to {
      background-color: rgb(25, 25, 25);
    }
  }

  @media screen and (max-width: 571px) {
    height: 100%;
  }
`;
