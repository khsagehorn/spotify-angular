var audioObject = new Audio();

spotifyApp.controller('previewController', function($scope, $http){

  var albumID, previewURL;
  $scope.artistID;
  var playing = false;
  
  $scope.preview = function(id){
    audioObject.pause();

    if(!playing){
      $http.get("https://api.spotify.com/v1/artists/"+id+"/top-tracks?country=US")
      .success(function(data){
        previewURL = data.tracks[0].preview_url;
        audioObject.src = previewURL;
        playAudio();
        playing = true;
      })
    }else{
      pauseAudio();
    }
  }

  $scope.track = function(id){
    $http.get("https://api.spotify.com/v1/artists/"+id+"/top-tracks?country=US")
    .success(function(data){
      $scope.tracks = data;
      window.open(data.tracks[0].external_urls.spotify);
    })

 
  }

  var playAudio = function(){
    audioObject.play(); 
    playing = true;
  }

  var pauseAudio = function(){
    audioObject.pause();
    playing = false;
  }
})