import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 10px; */
  padding: 20px;
  background-color: ${({ type }) => type};
  cursor: pointer;
  transition: all 250ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Images = styled.div`
  display: flex;
`;

export const Name = styled.h3`
  font-size: 12px;
`;
