angular.module("listaTelefonica").service("operadorasAPI", function (config) {
  this.getOperadoras = () => {
    return [
    {nome: 'oi', codigo: 13, categoria: "celular", preco: 2},
    {nome: 'tim', codigo: 35, categoria: "celular", preco: 3},
    {nome: 'vivo', codigo: 15, categoria: "celular", preco: 1},
    {nome: 'Embratel', codigo: 18, categoria: "fixo", preco: 2},
    {nome: 'GVT', codigo: 19, categoria: "celular", preco: 3}]
  };

});