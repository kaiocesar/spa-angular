angular.module('app', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'js/views/listar.html',
				controller: 'CtrlHome'
			})
			.when('/pessoas/adicionar',{
				templateUrl: 'js/views/adicionar.html',
				controller: 'CtrlHome'
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
			console.log($scope.pessoa);
			$scope.pessoas.push($scope.pessoa);

		};
	}]);