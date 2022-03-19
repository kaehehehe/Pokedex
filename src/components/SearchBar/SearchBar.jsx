import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    const pokemon = inputRef.current.value;
    if (inputRef.current.value === '') return;
    if (e.key === 'Enter') {
      navigate(`/details/${pokemon}`);
    }
  };

  return (
    <S.Input
      type="search"
      placeholder="Input pokemon name or number"
      ref={inputRef}
      onKeyUp={handleSearch}
    />
  );
};

export default SearchBar;
