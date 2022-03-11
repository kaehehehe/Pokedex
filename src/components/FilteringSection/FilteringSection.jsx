import React from 'react';

import * as S from './style';
import { setBackgroundColor } from '../../utils/setBackgroundColor';

const FilteringSection = ({ setPokemons, allPokemons, pokemons }) => {
  const types = [
    'all',
    'grass',
    'ghost',
    'ice',
    'ground',
    'electric',
    'poison',
    'dragon',
    'normal',
    'steel',
    'flying',
    'fairy',
    'fire',
    'water',
    'bug',
    'dark',
    'rock',
    'psychic',
    'fighting',
  ];

  const filteringPokemon = (e) => {
    if (e.target.textContent === 'all') {
      setPokemons(allPokemons);
    } else {
      const targetType = e.target.textContent;
      const result = pokemons.filter(
        (p) =>
          p.types[0].type.name === targetType ||
          p.types[1]?.type.name === targetType
      );
      setPokemons(result);
    }
  };

  return (
    <S.Section>
      {types.map((type) => (
        <S.Button
          key={type}
          type={setBackgroundColor(type)}
          onClick={filteringPokemon}
        >
          {type}
        </S.Button>
      ))}
    </S.Section>
  );
};

export default FilteringSection;
