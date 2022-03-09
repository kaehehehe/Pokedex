import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = ({details}) => {
  const hp = details && details.stats[0].base_stat;
  const attack = details && details.stats[1].base_stat;
  const defense = details && details.stats[2].base_stat;
  const specialAttack = details && details.stats[3].base_stat;
  const specialDefense = details && details.stats[4].base_stat;
  const speed = details && details.stats[5].base_stat;



  const data = {
    labels: [
      'HP',
      'Attack',
      'Defense',
      'Special Attack',
      'Special Defense',
      'Speed',
    ],
    datasets: [
      {
        label: `${details && details.name}`,
        data: [hp, attack, defense, specialAttack, specialDefense, speed],
        backgroundColor: 'rgba(34, 202, 236, .2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        pointBackgroundColor: 'rgba(34, 202, 236, 1)',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
      },
    ],
  };

const RadarOptions = {
  scale: {
    pointLabels: {
      fontSize: 20,
    },
    ticks: {
      min: 0,
      max: 100,
      stepSize: 10,
      showLabelBackdrop: true,
      backdropColor: 'rgba(203, 197, 11, 1)',
    },
  },
};

  return <Radar data={data} options={RadarOptions} />;
};

export default Chart;
