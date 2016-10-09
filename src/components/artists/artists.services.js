(function (){
  "use strict";

  app.service('artistDataService', ['$rootScope', '$http', function($rootScope, $http){

    var api = "https://api.spotify.com/v1/";

    return {
      search: function(query) {
        return $http.get(api+"search?q="+query)
        .then(function(albums){
          console.log(albums.album.items[0].id);
          return albums;
        })
        .catch(function(err){
          console.log('err', res);
          return err;
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