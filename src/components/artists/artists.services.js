(function (){
  "use strict";

  app.service('artistDataService', ['$rootScope', '$http', function($rootScope, $http){

    var api = "https://api.spotify.com/v1/";

    return {
      search: function(query) {
        return $http.get(api+"search/"+query)
        .then(function(albums){
          console.log('response', response);
          console.log(response.album.items[0].id);
          return albums;
        });
      },

      getArtist: function(album) {
        return $http.get(api+"albums/"+album)
        .then(function(response){
          console.log(response);
          var artist = response.artists[0].id;
          return response;

        });
      }
    };





    }])
});