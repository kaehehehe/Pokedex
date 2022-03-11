import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Chart from '../../components/Radar/RadarChart';
import { setBackgroundColor } from '../../utils/setBackgroundColor';
import * as S from './style';

const Details = ({ pokemons }) => {
  const navigate = useNavigate();
  const { pokemon } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const res = pokemons.filter((item) => item.name === pokemon);
    setDetails(res[0]);
  }, []);

  console.log()

  return (
    <>
      <S.Container>
        <S.ImageAndType>
          <S.Image
            src={details && details.sprites.other.dream_world.front_default}
          />
          <S.Name>{details && details.name}</S.Name>
          <S.Abilities>
            <S.Ability key={details && details.abilities[0].ability.name}>
              {details && details.abilities[0].ability.name}
            </S.Ability>
            /
            <S.Ability key={details && details.abilities[1].ability.name}>
              {details && details.abilities[1].ability.name}
            </S.Ability>
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
    </>
  );
};

export default Details;
