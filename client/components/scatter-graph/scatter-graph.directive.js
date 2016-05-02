'use strict';

angular.module('lolstatsApp')
  .directive('scatterGraph', function() {
    return {
      templateUrl: 'components/scatter-graph/scatter-graph.html',
      restrict: 'EA',
      controller: 'ScatterGraphCtrl',
      controllerAs: 'ScatterGraph',
      scope: {
        stat: '@',
        title: '@'
      }
    };
  });
