Highcharts.chart('append-rows-to-large-table-chart-container', {
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
          y: 271.8,
          label: '9.9',
        },
        {
          name: 'Angular',
          color: '#de0032',
          y: 257.6,
          label: '11.1'
        },
        {
          name: 'Vue.JS',
          y: 338.4,
          color: '#41b882',
          label: '10.3'
        }
      ]
    }
  ],
});
