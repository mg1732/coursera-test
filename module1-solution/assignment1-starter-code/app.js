(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope,
                       $filter,
                       $injector) {
  $scope.dishes = "";
  $scope.calcMessage = "";

  $scope.calcDishes = function () {
    var dishesCount = $scope.dishes.split(',').filter(Boolean).length;
    if (dishesCount == 0) {
      $scope.calcMessage = $scope.dishes;
    } else if (dishesCount <= 3) {
      $scope.calcMessage = "Enjoy!";
    } else {
      $scope.calcMessage = "Too much!";
    }
  };


}
})();
