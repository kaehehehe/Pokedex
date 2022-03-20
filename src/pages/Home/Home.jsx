import React, { useEffect, useRef, useState, useCallback } from 'react';
import axios from 'axios';

import * as S from './style';
import SearchBar from '../../components/SearchBar';
import FilteringSection from '../../components/FilteringSection/FilteringSection';
import PartySection from '../../components/PartySection/PartySection';
import Card from '../../components/Card/Card';

const Home = ({ party }) => {
  const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState(null);
  const targetRef = useRef(null);

  const fetchPokemons = async (url) => {
    if (!url) return;
    return await axios.get(url).then((res) => res.data);
  };

  const fetchPokemonDetails = async (arr) => {
    return arr.map(async (item) => {
      const res = await axios.get(item.url);
      setPokemonList((state) => {
        state = [...state, res.data];
        return state;
      });
    });
  };

  useEffect(() => {
    fetchPokemons(next).then((res) => {
      fetchPokemonDetails(res.results);
      setNext(res.next);
    });
  }, []);

  const callback = useCallback(
    async ([entry]) => {
      if (entry.isIntersecting) {
        fetchPokemons(next).then((res) => {
          fetchPokemonDetails(res.results);
          setNext(res.next);
        });
      }
    },
    [targetRef.current]
  );

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(callback);
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  });

  return (
    <>
      <S.Container>
        <SearchBar />
        <FilteringSection
          pokemonList={pokemonList}
          setFilteredPokemonList={setFilteredPokemonList}
        />
        <PartySection party={party} />
        <S.PokemonCards>
          {filteredPokemonList
            ? filteredPokemonList.map((pokemon) => (
                <Card key={pokemon.id} data={pokemon} />
              ))
            : pokemonList.map((pokemon, index) => (
                <Card
                  key={pokemon.id}
                  data={pokemon}
                  ref={index === pokemonList.length - 1 ? targetRef : null}
                />
              ))}
        </S.PokemonCards>
      </S.Container>
    </>
  );
};

export default Home;
