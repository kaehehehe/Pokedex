import React from 'react';
import axios from 'axios';

import * as S from './style';
import { setBackgroundColor } from '../../utils/setBackgroundColor';

const FilteringSection = ({ pokemonList, setFilteredPokemonList }) => {
  const types = [
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

  const handleClickResetBtn = () => {
    setFilteredPokemonList(null);
  };

  const handleClickTypesBtn = (e) => {
    const targetType = e.target.textContent;
    const result = pokemonList.filter(
      (p) =>
        p.types[0].type.name === targetType ||
        p.types[1]?.type.name === targetType
    );
    setFilteredPokemonList(result);
  };

  return (
    <S.Section>
      <S.Button onClick={handleClickResetBtn}>reset</S.Button>
      {types.map((type) => (
        <S.Button
          key={type}
          type={setBackgroundColor(type)}
          onClick={(e) => handleClickTypesBtn(e)}
        >
          {type}
        </S.Button>
      ))}
    </S.Section>
  );
};

export default FilteringSection;
