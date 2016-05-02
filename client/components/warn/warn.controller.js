'use strict';

class WarnController {
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
  }
}

angular.module('lolstatsApp')
  .controller('WarnController', WarnController);
