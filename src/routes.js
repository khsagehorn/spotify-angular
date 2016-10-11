var spotifyApp = angular.module('spotifyApp', ['ngRoute']);


spotifyApp.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    templateUrl: './components/artists/artists.html',
    controller: 'artistSearchController',
    restricted: false
  })
  .otherwise({redirectTo: '/'});
});


