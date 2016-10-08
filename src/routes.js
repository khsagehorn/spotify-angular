var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    templateUrl: './components/artists/artists.html',
    controller: 'artistsController',
    restricted: false
  })
  .otherwise({redirectTo: '/'});
});