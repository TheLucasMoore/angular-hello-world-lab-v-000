function MainController($scope) {
  $scope.name = "Lucas"
  $scope.email = "hey@fake.gov"
  $scope.phone = "1-800-1155-177"
}

angular
  .module('app')
  .controller('MainController', MainController)