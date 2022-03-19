import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { setBackgroundColor } from '../../utils/setBackgroundColor';

const Card = React.forwardRef(({ data }, ref) => {
  const navigate = useNavigate();

  return (
    <S.Card
      ref={ref}
      type={setBackgroundColor(data.types[0].type.name)}
      onClick={() => navigate(`/details/${data.name}`)}
    >
      <S.Images>
        <img src={data.sprites.front_default} alt={data.name} />
        <img src={data.sprites.back_default} alt={data.name} />
      </S.Images>
      <S.Name>{data.name}</S.Name>
    </S.Card>
  );
});

export default Card;
