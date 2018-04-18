Highcharts.chart('remove-row-chart-container', {
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
          y: 51.5,
          label: '2.0',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 46.1,
          label: '2.6'
        },
        {
          name: 'Vue.JS',
          y: 52.5,
          color: '#41b882',
          label: '1.8'
        }
      ]
    }
  ],
});
