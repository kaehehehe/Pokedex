import React from 'react';

import * as S from './style';
import { ReactComponent as PokeBall } from '../../assets/pokeball.svg';

const PartySection = () => {
  const party = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <S.PartySection>
      {party.map((item) => (
        <S.PokeBallStyle>
          <PokeBall width={35} height={35} stroke={'gray'} key={item} />
        </S.PokeBallStyle>
      ))}
    </S.PartySection>
  );
};

export default PartySection;
