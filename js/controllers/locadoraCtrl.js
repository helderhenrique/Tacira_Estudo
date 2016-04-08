angular.module("locadora").controller("locadoraCtrl", function ($scope, uppercaseFilter, $location, filmeService) {

    $scope.app = "Locadora";
    $scope.filmes = filmeService.getFilmes();


    $scope.apagarFilmes = function (filmes) {
        $scope.filmes = filmes.filter(function (filme) {
            if (!filme.selecionado) return filme;
        });
    };
    $scope.isFilmeSelecionado = function (filmes) {
        return filmes.some(function (filme) {
            return filme.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});
