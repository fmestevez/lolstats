'use strict';

angular.module('lolstatsApp.auth', [
  'lolstatsApp.constants',
  'lolstatsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
