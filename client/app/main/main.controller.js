'use strict';

(function() {

class MainController {

  constructor($http, $scope, Auth) {
    this.$http = $http;
    this.$scope = $scope;
    this.isLoggedIn = Auth.isLoggedIn;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  $onInit() {
    // faker id
    this.$http.get('/api/riot/game/bysummoner/KR/1183421').then(response => {
      let fakerData = response;

      if(this.isLoggedIn()) {

        let user = this.getCurrentUser();
        this.$http.get(`/api/riot/summoner/getbyname/${user.region}/${user.username}`).then(response => {

          let summonerid = response.data[user.username].id;
          this.$http.get(`/api/riot/game/bysummoner/${user.region}/${summonerid}`).then(response => {
            this.$scope.$broadcast('graphData', [fakerData, response]);
          });
        });
      } else {
        this.$scope.$broadcast('graphData', [fakerData]);
      }
    });
  }
}

angular.module('lolstatsApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
