import React, { useEffect } from 'react';
import axios from 'axios';

import Pokemon from '../components/Pokemon';

const Home = ({ setPokemons, pokemons }) => {
  const fetchPokemons = async () => {
    return await axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then((res) => res.data.results);
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

  useEffect(() => {
    fetchPokemons().then((res) => fetchPokemonDetails(res));
  }, []);

  return (
    <ul>
      {pokemons &&
        pokemons.map((item) => <Pokemon key={item.name} data={item} />)}
    </ul>
  );
};

export default Home;
