Highcharts.chart('create-many-rows-chart-container', {
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
          y: 2033.7,
          label: '32.0',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 1682.0,
          label: '53.1'
        },
        {
          name: 'Vue.JS',
          y: 1521.4,
          color: '#41b882',
          label: '55.7'
        }
      ]
    }
  ],
});
