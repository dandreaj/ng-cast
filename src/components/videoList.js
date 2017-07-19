angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<',
    onClick: '<'
  },
  require: {
    parent: "^app"
  },
  controller: function() {
    this.$onInit = function() {
      this.onClick = function (video) {
        this.parent.selectVideo(video);
      };
    };

  }
});
