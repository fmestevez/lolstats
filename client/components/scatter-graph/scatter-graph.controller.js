'use strict';

class ScatterGraphCtrl {

  constructor($http, $scope) {
    this.$http = $http;
    this.$scope = $scope;
    this.playerData = [];

    this.$scope.$on('graphData', (event, args) => {
      this.fakerData = args[0].data.map((a) => {
        return this.returnZeroIfUndefined(a.stats[this.$scope.stat]);
      });

      if(args[1]) {
        this.playerData = args[1].data.map((a) => {
          return this.returnZeroIfUndefined(a.stats[this.$scope.stat]);
        });
      }

      const trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: this.fakerData,
        type: 'scatter',
        name: 'Faker'
      };

      const trace2 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: this.playerData,
        type: 'scatter',
        name: 'You'
      };

      const layout = {
        title: this.$scope.title,
        xaxis: {
          title: 'Last 10 Games',
          titlefont: {
            family: 'Courier New, monospace',
            size: 10,
            color: '#7f7f7f'
          }
        },
        yaxis: {
          title: this.$scope.stat,
          titlefont: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
      };

      const data = [trace1, trace2];
      this.graph = Plotly.newPlot(`scatter-graph-${this.$scope.stat}`, data, layout);
    });
  }

  returnZeroIfUndefined(value) {
    if(typeof value === 'undefined') {
      return 0;
    }

    return value;
  }
}

angular.module('lolstatsApp')
  .controller('ScatterGraphCtrl', ScatterGraphCtrl);
