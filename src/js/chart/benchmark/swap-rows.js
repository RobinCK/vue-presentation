Highcharts.chart('swap-rows-chart-container', {
  chart: {
    type: 'column',
    width: 900,
  },
  title: {
    text: ''
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: ''
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f} +/- {point.label}'
      }
    }
  },

  series: [
    {
      name: 'Frameworks',
      colorByPoint: true,
      data: [
        {
          name: 'React',
          color: '#60dbfb',
          y: 19.6,
          label: '4.7',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 20.1,
          label: '4.2'
        },
        {
          name: 'Vue.JS',
          y: 21.8,
          color: '#41b882',
          label: '4.5'
        }
      ]
    }
  ],
});
