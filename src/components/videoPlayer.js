angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '<'
  },
  controller: function($scope, $sce) {

    this.videoSource = function() {
      this.url = `https://www.youtube.com/embed/${this.video.id.videoId}`;
      return this.video ? $sce.trustAsResourceUrl(this.url) : "";
    }

    // // this.$onInit = function() {
    //   this.url = this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : "";
      // this.url = `https://www.youtube.com/embed/${this.video.id.videoId}`;
      console.log(this.url);
    // };


  }
});
