spotifyApp.controller('artistSearchController', function($scope, $http){

  var artistID;

  $scope.query;

  $scope.search = function(){
    $http.get("https://api.spotify.com/v1/search?q="+$scope.query+"&type=artist")
    .success(function(data){
      $scope.artist = data;
      artistID = data.artists.items[0].id;
      console.log(data);
    })
    .then(function(){
      $http.get("https://api.spotify.com/v1/artists/"+artistID+"/related-artists")
      .success(function(data){
        $scope.related = data.artists;
        console.log(data);
      })
    })
  }

})

spotifyApp.controller('previewController', function($scope, $http){

  var albumID;
  $scope.artistID;

  $scope.preview = function(id){
    $http.get("https://api.spotify.com/v1/artists/"+id+"/top-tracks?country=US")
    .success(function(data){
      previewURL = data.tracks[0].preview_url;
      console.log(data);
      console.log(data.tracks[0].preview_url);
      var audioObject = new Audio(data.tracks[0].preview_url);
      audioObject.play();

    })
  }
})