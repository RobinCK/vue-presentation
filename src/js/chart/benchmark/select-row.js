Highcharts.chart('select-row-chart-container', {
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
          y: 12.4,
          label: '4.1',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 7.6,
          label: '4.0'
        },
        {
          name: 'Vue.JS',
          y: 9.8,
          color: '#41b882',
          label: '2.5'
        }
      ]
    }
  ],
});
