import generateChart from '../generator-benchmark';

generateChart(
  'startup-time-chart-container',
  {
    react: 49.4,
    angular: 88.8,
    vue: 48.4,
  },
);
