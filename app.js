var app = angular.module('flapperNews', ['ui.router']);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.test = 'Hello World!';

    $scope.posts = posts.posts;

    for (var i = 0; i < 5; i++) {
      $scope.posts.push({title: 'post ' + i, upvotes: i});
    }

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    }

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);
