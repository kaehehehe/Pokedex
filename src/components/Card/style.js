import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
  background-color: ${({ type }) => type};
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    img {
      animation-name: jump;
      animation-duration: 500ms;
      animation-iteration-count: infinite;
      animation-direction: reverse;
    }

    @keyframes jump {
      from {
        transform: translateY(0px);
      }

      to {
        transform: translateY(8px);
      }
    }
  }
`;

export const Images = styled.div`
  display: flex;
`;

export const Name = styled.h3`
  font-size: 12px;
`;
