angular.module("listaTelefonica").directive("uiDate", function ($filter) {

  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {

      let _formatDate = function(date){
        date = date.replace(/[^0-9]+/g, "");
        if(date.length > 2){
          date = date.substring(0,2) + "/" + date.substring(2);
        }
        if(date.length > 5){
          date = date.substring(0,5) + "/" + date.substring(5, 9);
        }
        return date;

      }

      element.bind("keyup", function(){
        ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
        ctrl.$render();
      });

      ctrl.$parsers.push(function (value){
        if(value.length == 10){
          let list = value.split("/");
          console.log(list)
          return new Date(list[2], list[1]-1, list[0]);
        }
      });

      ctrl.$formatters.push(function (value){
        $filter("date")(value, "dd/MM/yyyy")
      });
    }   
  };

});
