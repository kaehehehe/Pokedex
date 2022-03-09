import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ type }) => type};
`;

const Pokemon = ({ data }) => {
  const setBackgroundColor = (type) => {
    switch (type) {
      case 'grass':
        return 'rgb(120,200,79, 0.7)';
      case 'ghost':
        return 'rgb(112,88,152, 0.7)';
      case 'ice':
        return 'rgb(152,216,216, 0.7)';
      case 'ground':
        return 'rgb(224,192,104, 0.7)';
      case 'electric':
        return 'rgb(248,207,48, 0.7)';
      case 'poison':
        return 'rgb(159,64,159, 0.7)';
      case 'dragon':
        return 'rgb(112,56,248, 0.7)';
      case 'normal':
        return 'rgb(168,168,119, 0.7)';
      case 'steel':
        return 'rgb(184,184,208, 0.7)';
      case 'flying':
        return 'rgb(168,144,240, 0.7)';
      case 'fairy':
        return 'rgb(238,153,172, 0.7)';
      case 'fire':
        return 'rgb(239,128,48, 0.7)';
      case 'water':
        return 'rgb(103,144,240, 0.7)';
      case 'bug':
        return 'rgb(168,183,32, 0.7)';
      case 'dark':
        return 'rgb(112,88,72, 0.7)';
      case 'rock':
        return 'rgb(184,160,56, 0.7)';
      case 'psychic':
        return 'rgb(248,87,135, 0.7)';
      case 'fighting':
        return 'rgb(192,48,40, 0.7)';
      default:
        return 'white';
    }
  };

  const navigate = useNavigate();
  return (
    <Card
      type={setBackgroundColor(data.types[0].type.name)}
      onClick={() => navigate(`/details/${data.name}`)}
    >
      <img src={data.sprites.front_default} alt={data.name} />
      <h3>{data.name}</h3>
    </Card>
  );
};

export default Pokemon;
