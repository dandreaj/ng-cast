
angular.module('video-player', [])

.controller('VideoCtrl', function($scope) {
  $scope.videos = exampleVideoData;
  $scope.video = exampleVideoData[0];
})

.component('app', {
  templateUrl: 'src/templates/app.html'
});
