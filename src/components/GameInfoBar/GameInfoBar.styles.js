import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 150px;
  background: var(--darkGray);
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    border: 3px groove whitesmoke;
    border-radius: 20px;
    background: var(--medGray);
    display: flex;
    flex: 1;
    justify-content: center;
    text-align: center;
    margin: 0 20px;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;
