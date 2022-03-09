import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = ({ pokemons }) => {
  const navigate = useNavigate();
  const { pokemon } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const res = pokemons.filter((item) => item.name === pokemon);
    setDetails(res[0]);
  }, []);

  return (
    <div>
      <img src={details && details.sprites.front_default} />
      <img src={details && details.sprites.back_default} />
      {details &&
        details.types.map((type) => (
          <h4 key={type.type.name}>{type.type.name}</h4>
        ))}
      <p>HP : {details && details.stats[0].base_stat}</p>
      <p>Attack : {details && details.stats[1].base_stat}</p>
      <p>Defense : {details && details.stats[2].base_stat}</p>
      <p>Special Attack : {details && details.stats[3].base_stat}</p>
      <p>Special Defense : {details && details.stats[4].base_stat}</p>
      <p>Speed : {details && details.stats[5].base_stat}</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Details;
