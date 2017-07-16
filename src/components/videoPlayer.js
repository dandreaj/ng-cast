angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '<'
  },
  controller: function($scope) {
    // this.url = 'https://www.youtube.com/embed/'
    this.url = function() {
      console.log(this);
    }

  }
});
