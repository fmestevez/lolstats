'use strict';

angular.module('lolstatsApp')
  .directive('warn', () => ({
    templateUrl: 'components/warn/warn.html',
    restrict: 'E',
    controller: 'WarnController',
    controllerAs: 'warn'
  }));
