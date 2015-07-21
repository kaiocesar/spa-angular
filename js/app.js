angular.module('app', ['ngRoute','ngResource'])
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'js/views/listar.html',
				controller: 'CtrlHome'
			})
			.when('/pessoas/adicionar',{
				templateUrl: 'js/views/adicionar.html',
				controller: 'CtrlHome'
			})
			.when('/posts', {
				templateUrl: 'js/views/posts.html',
				controller: 'CtrlPost'
			});
	})
	.factory('Pessoas', function() {
		var pessoas = [
			{name: "Kaio"},
			{name: "Bruna"},
			{name: "Milena"},
			{name: "Julia"},
			{name: "Miguel"},
			{name: "Mariana"}
		];
		return pessoas;
	})
	.controller('CtrlHome', ['$scope', 'Pessoas', function($scope, Pessoas){
		$scope.pessoas = Pessoas;

		$scope.add = function(){			
			$scope.pessoas.push($scope.pessoa);
		};

	}])
	.controller('CtrlPost', ["$scope", "$resource", function($scope, $resource){
		Posts = $resource("http://jsonplaceholder.typicode.com/posts");
		$scope.posts = Posts.query();
	}]);