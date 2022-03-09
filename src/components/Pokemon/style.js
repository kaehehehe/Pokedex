import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  background-color: ${({ type }) => type};
  cursor: pointer;
  transition: all 250ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;