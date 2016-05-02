'use strict';

class ScatterGraphCtrl {

  constructor($http, $scope) {
    this.$http = $http;
    this.$scope = $scope;
    this.playerData = [];

    this.$scope.$on("graphData", (event, args) => {
      this.playerData = args.data.map((a) => {
        return this.returnZeroIfUndefined(a.stats[this.$scope.stat])
      });

      var trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: this.playerData,
        type: 'scatter'
      };

      var data = [trace1];
      this.graph = Plotly.newPlot(`scatter-graph-${this.$scope.stat}`, data);
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
