import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { ReactComponent as PokeBall } from '../../assets/pokeball.svg';

const PartySection = ({ party }) => {
  const navigate = useNavigate();
  return (
    <S.PartySection>
      {party.map((pokemon) => (
        <S.Tooltip>
          <S.PokeBallStyle
            onClick={() => navigate(`/details/${pokemon}`)}
          >
            <PokeBall width={35} height={35} key={pokemon} />
          </S.PokeBallStyle>
          <div className='description'>{pokemon}</div>
        </S.Tooltip>
      ))}
    </S.PartySection>
  );
};

export default PartySection;
