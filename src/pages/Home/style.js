import styled from 'styled-components';

export const Container = styled.ul`
  max-width: 1000px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  row-gap: 10px;
  margin-top: 100px;
`;