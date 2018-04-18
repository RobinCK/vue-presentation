Highcharts.chart('create-rows-chart-container', {
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
          y: 187.6,
          label: '4.3',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 185.7,
          label: '7.8'
        },
        {
          name: 'Vue.JS',
          y: 169.2,
          color: '#41b882',
          label: '3.6'
        }
      ]
    }
  ],
});
