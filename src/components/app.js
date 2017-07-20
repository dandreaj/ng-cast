
angular.module('video-player', [])
//
// .controller('VideoCtrl', function($scope) {
//   $scope.videos = exampleVideoData;
//   $scope.video = exampleVideoData[0];
// })


.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    // this.$onInit = function() {
      youTube.search('cats', (function(videoData) {
        console.log('video data', videoData)
        this.videos = videoData
        this.currentVideo = videoData[0]
      }).bind(this));
    // };
    // this.videos = exampleVideoData;
    // this.currentVideo = exampleVideoData[0];
    this.selectVideo = function(videoObj) {
      this.currentVideo = videoObj;
    };
    this.searchResults = function() {

    };
  }
});
