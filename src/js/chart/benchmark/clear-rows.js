Highcharts.chart('clear-rows-chart-container', {
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
          y: 224.4,
          label: '6.0',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 360.3,
          label: '16.4'
        },
        {
          name: 'Vue.JS',
          y: 240.9,
          color: '#41b882',
          label: '11.4'
        }
      ]
    }
  ],
});
