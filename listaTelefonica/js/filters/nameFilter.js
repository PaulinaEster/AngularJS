angular.module("listaTelefonica").filter("name", function () {
  return function (input){
    let lista = input.split(" ");
    let list = lista.map(nome => {
      if(/(da|de)/.test(nome)) return nome;
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    return list.join(" ");
  };
});

angular.module("listaTelefonica").filter("operadora", function () {
  return function (input){
    if(input) return input.toUpperCase();
  };
});

angular.module("listaTelefonica").filter("ellipsis", function () {
  return function (input, size){
    if(input.length <= (size ? size : 7)) return input;
    let result = input.substring(0, (size ? size : 7 )) + " ...";
    return result;
  };
});