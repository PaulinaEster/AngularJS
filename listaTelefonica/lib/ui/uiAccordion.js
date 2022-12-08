angular.module("ui", []);

angular.module("ui").run(function( $templateCache ){
  $templateCache.put("view/accordion.html", `
  <div class="ui-accordion-title" ng-click="open()" > {{title}} </div>
  <div class="ui-accordion-content" ng-transclude ng-show="isOpened" > </div>
  `);
})

angular.module("ui").directive("uiAccordions", function (){
  return {
    controller: function($scope, $element, $attrs){
      let accordions = [];

      this.registerAccordion = function (accordion){
        accordions.push(accordion);
      };

      this.closeAll = function(){
        accordions.forEach(ac => {
          ac.isOpened = false;
        });
      };

    }
  }
});

angular.module("listaTelefonica").directive("uiAccordion", function (){
  return{
    templateUrl: "view/accordion.html",
    scope: {
      title: "@"
    },
    require: "^uiAccordions",
    transclude: true,
    link: function (scope, element, attrs, ctrl) {
      ctrl.registerAccordion(scope);

      scope.open = function(){
        ctrl.closeAll();
        scope.isOpened = true;
      }; 

    }
  }
});