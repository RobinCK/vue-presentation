Highcharts.chart('partial-update-chart-container', {
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
          y: 93.6,
          label: '5.6',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 73.5,
          label: '4.9'
        },
        {
          name: 'Vue.JS',
          y: 168.1,
          color: '#41b882',
          label: '7.4'
        }
      ]
    }
  ],
});
