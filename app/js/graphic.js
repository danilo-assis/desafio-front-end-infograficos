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
          categories: ['País', 'Cultura', 'Esporte','Internacional','Rio']
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      series: [{
          name: '',
          data: [75,50,45,30,25]
      },]
  });
});
