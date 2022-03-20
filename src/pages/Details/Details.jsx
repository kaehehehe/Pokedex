import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import Chart from '../../components/Radar/RadarChart';
import { setBackgroundColor } from '../../utils/setBackgroundColor';
import * as S from './style';

const Details = ({ party, setParty }) => {
  const { pokemon } = useParams();
  const [details, setDetails] = useState(null);
  const [like, setLike] = useState(false);

  const searchPokemon = (pokemon) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
  };

  useEffect(() => {
    searchPokemon(pokemon).then((res) => {
      const details = res.data;
      setDetails(details);
      setLike(party.includes(details.name));
    });
  }, []);

  const handleClickLikeBtn = () => {
    const name = details.name;
    if (like) {
      setLike(false);
      const index = party.indexOf(name);
      party.splice(index, 1);
      setParty(party);
    } else {
      if (party.length >= 6) {
        alert('포켓몬은 6마리까지 저장할 수 있습니다.');
        return;
      } else {
        setLike(true);
        const newParty = [...party, name];
        setParty(newParty);
      }
    }
  };

  return (
    <>
      {details && (
        <S.Container>
          <S.ImageAndType>
            <S.Image src={details.sprites.other.dream_world.front_default} />
            <S.NameWrapper>
              <S.LikeIcon like={like} onClick={handleClickLikeBtn}>
                <FaHeart />
              </S.LikeIcon>
              <S.Name>{details.name}</S.Name>
            </S.NameWrapper>
            <S.Abilities>
              {details.abilities.map((ability) => (
                <S.Ability key={ability.ability.name}>
                  {ability.ability.name}
                </S.Ability>
              ))}
            </S.Abilities>
            <S.TypeWrapper>
              {details &&
                details.types.map((type, index) => (
                  <S.Type
                    index={index}
                    type={setBackgroundColor(type.type.name)}
                    key={type.type.name}
                  >
                    {type.type.name}
                  </S.Type>
                ))}
            </S.TypeWrapper>
          </S.ImageAndType>
          <S.Status>
            <Chart details={details} />
          </S.Status>
        </S.Container>
      )}
    </>
  );
};

export default Details;
