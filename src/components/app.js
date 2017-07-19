
angular.module('video-player', [])
//
// .controller('VideoCtrl', function($scope) {
//   $scope.videos = exampleVideoData;
//   $scope.video = exampleVideoData[0];
// })

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.test = youTube;
    console.log(this.test);
    this.$onInit = function() {
      youTube.search('puppies');
    };
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = function(videoObj) {
      this.currentVideo = videoObj;
    };
    this.searchResults = function() {

    };
  }
});
