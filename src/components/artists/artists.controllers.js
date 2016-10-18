spotifyApp.controller('artistSearchController', function($scope, $http){

  var artistID;

  $scope.query;
  $scope.click = false;

  $scope.search = function(){
    $http.get("https://api.spotify.com/v1/search?q="+$scope.query+"&type=artist")
    .success(function(data){
      $scope.artist = data;
      artistID = data.artists.items[0].id;
    })
    .then(function(){
      $http.get("https://api.spotify.com/v1/artists/"+artistID+"/related-artists")
      .success(function(data){
        $scope.related = data.artists;
        $scope.click = true;
      })
    })
    .catch(function(){
      console.log("error");
      $scope.error = "whoops. we didn't find anyone with that name.";
      $scope.click = false;
    })
  }
  }

})