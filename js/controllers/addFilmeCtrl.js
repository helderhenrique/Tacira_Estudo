angular.module("locadora").controller("addFilmeCtrl", function ($scope, $location, filmeService, generoService) {

	  $scope.generos = generoService.getGeneros();

	$scope.adicionarFilme = function (filme) {
			filmeService.saveFilme(filme);
			delete $scope.filme;
			$scope.filmeForm.$setPristine();
			$location.path("/filmes");
	};
});
