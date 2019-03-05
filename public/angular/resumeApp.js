var testCtrl = function($scope) {
  $scope.data = { Test: "Testing" };
};

angular.module("resumeApp", []).controller("testCtrl", testCtrl);
