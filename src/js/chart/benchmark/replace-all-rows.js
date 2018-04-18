Highcharts.chart('replace-all-rows-chart-container', {
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
          y: 165.2,
          label: '7.0',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 179.3,
          label: '6.5'
        },
        {
          name: 'Vue.JS',
          y: 161.8,
          color: '#41b882',
          label: '3.9'
        }
      ]
    }
  ],
});
