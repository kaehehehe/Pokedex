import styled from 'styled-components';

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
  width: 350px;
  margin-bottom: 20px;
`;

export const Name = styled.h3`
  font-size: 30px;
  color: white;
  margin-bottom: 20px;
`;

export const Abilities = styled.ul`
  display: flex;
  color: white;
  margin-bottom: 20px;

`;

export const Ability = styled.li`
  margin-right: 5px;
`;

export const TypeWrapper = styled.ul`
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
