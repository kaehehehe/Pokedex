import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonCards = styled.ul`
  max-width: 1000px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, auto));
  gap: 15px;
  margin-bottom: 30px;
`;
