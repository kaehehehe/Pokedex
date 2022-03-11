import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${({ type }) => type};
  padding: 10px;
  border-radius: 3px;
  margin: 5px;
  font-size: 12px;
  font-family: 'Press Start 2P', cursive;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;
