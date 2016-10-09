app.controller('artistSearchController', ['$scope', 'artistDataService',
  function($scope, artistDataService){
    artistDataService.getArtist('0G1ffjfFuTUTVjDrVdLimH')
    .then(function(albums){
      $scope.albums = albums;
  })
}])