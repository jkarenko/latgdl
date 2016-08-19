var app = angular.module('flapperNews', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('notfound', {
      url: '/notfound',
      templateUrl: '/notfound.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });


    $urlRouterProvider.otherwise('notfound');
  }
]);


// factories

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

// controllers

app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.posts = posts.posts;

    for (var i = 0; i < 5; i++) {
      $scope.posts.push({
        title: 'post ' + i,
        upvotes: i,
        comments: [
          {author: 'Bob', body: 'Cool post, bro!', upvotes: 2},
          {author: 'Mr. Stevens', body: 'GOAT', upvotes: 3}
        ]
      });
    }

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') { return; }

      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Bob', body: 'Cool post, bro!', upvotes: 2},
          {author: 'Mr. Stevens', body: 'GOAT', upvotes: 3}
        ]
      });

      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);

app.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts) {

    $scope.post = posts.posts[$stateParams.id];

    $scope.addComment = function() {
      if ($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
  }

]);
