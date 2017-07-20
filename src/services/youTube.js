angular.module('video-player')
.service('youTube', function($http, $window){
  this.search = function(query, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable : true
      }

    }).then(function successCallback(response) {
      console.log("success",response)
      console.log('callback',callback)
      callback(response.data.items);
      // callback()
    // this callback will be called asynchronously
    // when the response is available
    }, function errorCallback(response) {
      console.log("error",response)
    // called asynchronously if an error occurs    // or server returns response with an error status.
    });
  };
})
