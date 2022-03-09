import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Pokemon from '../components/Pokemon';

const Container = styled.ul`
  max-width: 1000px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  row-gap: 10px;
  margin-top: 100px;
`;

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
    <Container>
      {pokemons &&
        pokemons.map((item) => <Pokemon key={item.name} data={item} />)}
    </Container>
  );
};

export default Home;
