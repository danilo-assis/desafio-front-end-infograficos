var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
// Create the chart
Highcharts.chart('container', { /*Highcharts options*/ });


document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('container', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Editorias Mais Acessadas'
      },
      xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          name: 'Jane',
          data: [1, 0, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }]
  });
});
