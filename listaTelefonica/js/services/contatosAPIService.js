angular.module("listaTelefonica").factory("contatosAPI", function ($http, config )  {
  var _contatos = [
    {id: 1, nome: "Pedro da Costa", telefone: "12314", operadora: { nome: 'Vivo', codigo: 15 },cor: 'blue', data: new Date() },
    {id: 2,nome: "Ana Dalla Nora", telefone: "89089", operadora: { nome: 'oi', codigo: 13 },cor: "red" },
    {id: 3,nome: "Carla Con", telefone: "8908", operadora: { nome: 'gvt', codigo: 19 },cor: 'green' },
    {id: 4,nome: "Conrad", telefone: "134789", operadora: { nome: 'tim', codigo: 35 }, cor: "orange" }];

  var _getContatos = function(){
    return _contatos;
  }

  let _getContato = function(id){
    console.log();
    return _contatos.filter(contato => contato.id == id)[0]
  }

  var _saveContato = function (contato){
    contato.id = _contatos.length + 1;
    _contatos.push(contato);
  }
  
  // no consumo de api real deve ser assim: 
  var _getFrase = function () { 
    return $http.get(config.urlAPIFrases).then((data) => data.data.slip);
  }

  return {
    getContatos: _getContatos,
    getFrase: _getFrase,
    getContato: _getContato,
    saveContato: _saveContato
  };

});