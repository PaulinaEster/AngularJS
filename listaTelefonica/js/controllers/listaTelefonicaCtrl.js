
  angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, serialGenerator, contatos, frase) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos;
    $scope.frase = frase; 

    $scope.classe = "selecionado"
    $scope.feijao = "negrito"

    $scope.ordenarPor = (campo) =>{
      $scope.criterioOrdenacao = campo;
      $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }

    $scope.apagarContatos = (contatos) => {
      $scope.contatos = contatos.filter(contato => {
        return !contato.selecionado;
      });
    }

    $scope.isContatoSelecionado = (contatos) => {
      return contatos.some((c) => { return c.selecionado; });
    };
    
    let generateSerial = function (contatos){
      contatos.forEach(contato => {
        contato.serial = serialGenerator.generate();
      });
    };

    generateSerial(contatos);
  });