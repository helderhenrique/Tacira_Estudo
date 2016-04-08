angular.module("locadora").config(function ($routeProvider) {

    $routeProvider.when("/filmes", {
        templateUrl: "view/filmes.html",
        controller: "locadoraCtrl",
        resolve: {
			       filmes: function (filmeService) {
				return filmeService.getFilmes();
			}
        }
    });

    $routeProvider.when("/adicionarFilme", {
        templateUrl: "view/adicionarFilme.html",
        controller: "addFilmeCtrl",
    });

    $routeProvider.otherwise({
     redirectTo: "/filmes"
 });
});
