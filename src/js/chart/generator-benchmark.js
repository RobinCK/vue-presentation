import Highcharts from 'highcharts/highcharts';

export default function generateChart(id, { react, angular, vue }) {
  Highcharts.chart(id, {
    boost: {
      allowForce: true,
      debug: {
        showSkipSummary: true,
      },
    },
    chart: {
      type: 'column',
      width: 900,
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f} +/- {point.label}',
        },
      },
    },
    series: [
      {
        name: 'Frameworks',
        colorByPoint: true,
        data: [
          {
            name: 'React',
            color: '#60dbfb',
            y: react,
            label: '6.0',
          },
          {
            name: 'Angular',
            color: '#de0032',
            y: angular,
            label: '16.4',
          },
          {
            name: 'Vue.JS',
            y: vue,
            color: '#41b882',
            label: '11.4',
          },
        ],
      },
    ],
  });
}
