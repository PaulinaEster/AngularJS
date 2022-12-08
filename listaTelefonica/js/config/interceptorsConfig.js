angular.module("listaTelefonica").config(function ($httpProvider){
  $httpProvider.interceptors.push("timestempInterceptor");
  $httpProvider.interceptors.push("errorInterceptor");
  console.log($httpProvider);
});