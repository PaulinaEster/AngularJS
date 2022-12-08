
angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $location, operadoras, serialGenerator, contatosAPI) {
  $scope.app = "Lista Telefonica"; 
  $scope.operadoras = operadoras; 

  $scope.adicionarContato = (contato) =>{
    contato.serial = serialGenerator.generate();
    contatosAPI.saveContato(contato);
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
    $location.path("/contatos");
  }
 
});