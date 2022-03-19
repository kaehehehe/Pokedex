import styled from 'styled-components';

export const PartySection = styled.section`
  width: 100%;
  display: flex;
  margin: 0 0 20px 40px;
`;

export const PokeBallStyle = styled.div`
  margin-right: 12px;
  position: relative;
  cursor: pointer;
  `;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  transition: all 250ms linear;
  cursor: pointer;

  .description {
    display: none;
    position: absolute;
    padding: 10px;
    font-size: 12px;
    line-height: 1.6em;
    color: white;
    border-radius: 5px;
    background: black;
    width: fit-content;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:hover .description {
    display: inline-block;
    top: 40px;
    left: 0px;
  }
`;
