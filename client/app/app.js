'use strict';

angular.module('lolstatsApp', [
  'lolstatsApp.auth',
  'lolstatsApp.admin',
  'lolstatsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
