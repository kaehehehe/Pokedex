import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { setBackgroundColor } from '../../utils/setBackgroundColor';

const Pokemon = ({ data }) => {
  const navigate = useNavigate();

  return (
    <S.Card
      type={setBackgroundColor(data.types[0].type.name)}
      onClick={() => navigate(`/details/${data.name}`)}
    >
      <img src={data.sprites.front_default} alt={data.name} />
      <S.Name>{data.name}</S.Name>
    </S.Card>
  );
};

export default Pokemon;
