app.controller('artistSearchController', ['$scope', 'artistDataService',
  function($scope, artistDataService){
    artistDataService.search('drake')
    .then(function(albums){
      $scope.albums = albums;
  })
}])