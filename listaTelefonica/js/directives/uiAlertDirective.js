angular.module("listaTelefonica").directive("uiAlert", function (){

    return {
      templateUrl: "view/alert.html",
      replace: true,
      restrict: "AE",
      scope: {
        title: "@",  // igual a  title: "@title" 
        message: "=error"
      },
      transclude: true
    }

});