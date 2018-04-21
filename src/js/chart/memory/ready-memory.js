import generateChart from '../generator-benchmark';

generateChart(
  'ready-memory-chart-container',
  {
    react: 3.7,
    angular: 6.7,
    vue: 3.6,
  },
);
