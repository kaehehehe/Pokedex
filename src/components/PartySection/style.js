import styled from 'styled-components';

export const PartySection = styled.section`
  width: 100%;
  display: flex;
  margin: 0 0 20px 40px;
`;

export const PokeBallStyle = styled.span`
  margin-right: 12px;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
