import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './style';
import Pokemon from '../../components/Pokemon/Pokemon';
import FilteringSection from '../../components/FilteringSection/FilteringSection';
import SearchBar from '../../components/SearchBar';

const Home = ({ setPokemons, pokemons }) => {
  const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [allPokemons, setAllPokemons] = useState([]);

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
      setAllPokemons((state) => {
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
    <S.Container>
      <SearchBar />
      <FilteringSection
        pokemons={pokemons}
        setPokemons={setPokemons}
        allPokemons={allPokemons}
      />
      <S.PokemonCards>
        {pokemons.map((item) => (
          <Pokemon key={item.name} data={item} />
        ))}
      </S.PokemonCards>
      <button onClick={handleMore}>MORE</button>
    </S.Container>
  );
};

export default Home;
