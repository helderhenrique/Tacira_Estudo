angular.module("locadora").factory("filmeService", function () {

  filmes = [{
      nome: "Poderoso Chefão",
      ano: "21/12/1967",
      genero: {
          nome: "Ação"
      }
          }, {
      nome: "Scarface",
      ano: "08/10/1987",
      genero: {
          nome: "Drama"
      }
          }, {
      nome: "Clube da Luta",
      ano: "30/04/1999",
      genero: {
          nome: "Ficção Cientifica"
      }
          }];

	var _getFilmes = function () {
		return filmes;
	};

	var _getFilme = function (id) {
		return filmes + (id);
	};

	var _saveFilme = function (filme) {
		return filmes.push(angular.copy(filme));
	};

	return {
		getFilmes: _getFilmes,
		getFilme: _getFilme,
		saveFilme: _saveFilme
	};
});
