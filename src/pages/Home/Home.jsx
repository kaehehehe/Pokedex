import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Pokemon from '../../components/Pokemon/Pokemon';
import * as S from './style';

const Home = ({ setPokemons, pokemons }) => {
  const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon/');

  const fetchPokemons = async (url) => {
    if (!url) return;
    return await axios.get(url).then((res) => res.data);
  };

  const fetchPokemonDetails = async (arr) => {
    return arr.map(async (item) => {
      const res = await axios.get(item.url);
      setPokemons((state) => {
        state = [...state, res.data];
        return state;
      });
    });
  };

  const handleMore = () => {
    fetchPokemons(next).then((res) => {
      fetchPokemonDetails(res.results);
      setNext(res.next);
    });
  };

  useEffect(() => {
    handleMore();
  }, []);

  return (
    <>
      <S.Container>
        {pokemons.map((item) => (
          <Pokemon key={item.name} data={item} />
        ))}
      </S.Container>
      <button onClick={handleMore}>MORE</button>
    </>
  );
};

export default Home;
