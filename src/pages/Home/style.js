import styled from 'styled-components';

export const Container = styled.ul`
  max-width: 1000px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, auto));
  gap: 15px;
  margin-top: 50px;
`;