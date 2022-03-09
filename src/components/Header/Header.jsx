import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header onClick={() => navigate('/')}>
      <S.Title>Pokedex</S.Title>
    </S.Header>
  );
};

export default Header;
