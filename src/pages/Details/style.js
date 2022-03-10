import styled from 'styled-components';

export const Button = styled.div`
  width: fit-content;
  font-size: 12px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  transition: all 250ms ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transform: scale(0.97);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 1000px;
`;

export const ImageAndType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Image = styled.img`
  margin-bottom: 50px;
`;

export const TypeWrapper = styled.ul`
  list-style: none;
  display: flex;
`;

export const Type = styled.li`
  background-color: ${({ type }) => type};
  margin-right: ${({ index }) => index === 0 && '15px'};
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 13px;
`;

export const Status = styled.div`
  flex-grow: 2;
  width: 50px;
  background-color: white;
`;
