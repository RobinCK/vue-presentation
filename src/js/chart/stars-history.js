import Highcharts from 'highcharts/highcharts';

Highcharts.chart('star-chart-container', {
  chart: {
    type: 'spline',
    width: 900,
    backgroundColor: null,
  },
  title: {
    text: '',
  },
  xAxis: {
    type: 'datetime',
    title: {
      text: 'Date',
    },
  },
  yAxis: {
    title: {
      text: 'Stars',
    },
    min: 2000,
  },
  plotOptions: {
    spline: {
      lineWidth: 2,
      states: {
        hover: {
          lineWidth: 2,
        },
      },
      marker: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: 'react',
      color: '#60dbfb',
      data: [
        [Date.UTC(2013, 10, 19), 2610],
        [Date.UTC(2014, 3, 24), 5280],
        [Date.UTC(2014, 8, 1), 7950],
        [Date.UTC(2014, 11, 1), 10620],
        [Date.UTC(2015, 1, 1), 13290],
        [Date.UTC(2015, 2, 3), 15960],
        [Date.UTC(2015, 3, 13), 18630],
        [Date.UTC(2015, 5, 3), 21270],
        [Date.UTC(2015, 7, 2), 23940],
        [Date.UTC(2015, 8, 27), 26610],
        [Date.UTC(2015, 10, 16), 29280],
        [Date.UTC(2016, 0, 5), 31950],
        [Date.UTC(2016, 1, 24), 34620],
        [Date.UTC(2016, 3, 5), 37290],
        [Date.UTC(2016, 4, 20), 39960],
        [Date.UTC(2018, 3, 22), 94139],
        [Date.UTC(2018, 5, 18), 102664],
        [Date.UTC(2018, 6, 27), 107351],
      ],
    },
    {
      name: 'angular',
      color: '#de0032',
      data: [
        [Date.UTC(2015, 3, 22), 2280],
        [Date.UTC(2015, 8, 11), 4620],
        [Date.UTC(2015, 11, 29), 6960],
        [Date.UTC(2016, 2, 28), 9330],
        [Date.UTC(2016, 5, 9), 11670],
        [Date.UTC(2016, 7, 23), 14010],
        [Date.UTC(2016, 9, 20), 16350],
        [Date.UTC(2017, 0, 15), 18690],
        [Date.UTC(2017, 2, 23), 21030],
        [Date.UTC(2017, 4, 24), 23370],
        [Date.UTC(2017, 7, 3), 25710],
        [Date.UTC(2017, 9, 15), 28080],
        [Date.UTC(2017, 11, 11), 30420],
        [Date.UTC(2018, 1, 13), 32760],
        [Date.UTC(2018, 3, 22), 35354],
        [Date.UTC(2018, 5, 18), 37364],
        [Date.UTC(2018, 6, 27), 38879],
      ],
    },
    {
      name: 'Vue.JS',
      color: '#41b882',
      data: [
        [Date.UTC(2014, 11, 1), 2610],
        [Date.UTC(2015, 7, 1), 5280],
        [Date.UTC(2015, 8, 27), 7950],
        [Date.UTC(2016, 0, 5), 10620],
        [Date.UTC(2016, 1, 24), 13290],
        [Date.UTC(2016, 3, 5), 15960],
        [Date.UTC(2016, 4, 19), 18630],
        [Date.UTC(2016, 6, 15), 21270],
        [Date.UTC(2016, 7, 25), 23940],
        [Date.UTC(2016, 8, 26), 26610],
        [Date.UTC(2016, 9, 21), 29280],
        [Date.UTC(2016, 10, 13), 31950],
        [Date.UTC(2016, 11, 12), 34620],
        [Date.UTC(2017, 0, 9), 37290],
        [Date.UTC(2017, 1, 6), 39960],
        [Date.UTC(2018, 3, 22), 91782],
        [Date.UTC(2018, 5, 18), 102672],
        [Date.UTC(2018, 6, 27), 108834],
      ],
    },
  ],
});
