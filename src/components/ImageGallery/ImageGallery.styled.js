import styled from '@emotion/styled';

export const App = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  justify-items: center;
`;

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ErrorImg = styled.img`
  width: 100%;
`;
