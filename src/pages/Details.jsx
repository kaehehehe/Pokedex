import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { pokemon } = useParams();
  return <div>Details {pokemon}</div>;
};

export default Details;
