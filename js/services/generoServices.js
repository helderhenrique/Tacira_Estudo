angular.module("locadora").factory("generoService", function () {

  generos = [{
      nome: "Ação"
          }, {
      nome: "Ficção Cientifica"
          }, {
      nome: "Drama"
          }, ];

          var _getGeneros = function () {
            return generos;
          };

          return {
            getGeneros: _getGeneros,

          };
          });
