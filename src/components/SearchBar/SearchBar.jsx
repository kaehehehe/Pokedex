import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const searchPokemon = (keyword) => {
    try {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${keyword}/`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearch = (e) => {
    if (inputRef.current.value === '') return;
    if (e.key === 'Enter') {
      const keyword = inputRef.current.value;
      searchPokemon(keyword).then((res) => {
        navigate(`/details/${res.data.name}`);
      });
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
