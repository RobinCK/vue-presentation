Highcharts.chart('startup-time-chart-container', {
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
          y: 49.4,
          label: '0.7',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 88.8,
          label: '2.9'
        },
        {
          name: 'Vue.JS',
          y: 48.4,
          color: '#41b882',
          label: '2.4'
        }
      ]
    }
  ],
});
