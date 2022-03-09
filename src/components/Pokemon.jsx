import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemon = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/details/${data.name}`)}>
      <img src={data.sprites.front_default} alt={data.name} />
      <h3>{data.name}</h3>
    </div>
  );
};

export default Pokemon;
