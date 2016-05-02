'use strict';

(function() {

class MainController {

  constructor($http, $scope) {
    this.$http = $http;
    this.$scope = $scope;
  }

  $onInit() {
    this.$http.get('/api/riot/game/bysummoner/29413111').then(response => {
      this.$scope.$broadcast("graphData", response);
    });
  }
}

angular.module('lolstatsApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
