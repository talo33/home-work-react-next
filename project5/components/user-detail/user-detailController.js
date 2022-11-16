'use strict';


cs142App.controller('UserDetailController', ['$scope', '$rootScope', '$routeParams',
  function ($scope, $rootScope, $routeParams) {
    var userId = $routeParams.userId;
    $scope.userId = userId;

    $rootScope.contentDisplayed = $scope.userName;
    $rootScope.FetchModel('/user/'+userId, function(data){
        
        $scope.$apply(function() {
            $scope.firstName = data.first_name;
            $scope.lastName = data.last_name;
            $scope.userName = $scope.firstName + ' ' + $scope.lastName;
            $scope.location = data.location;
            $scope.description = data.description;
            $scope.occupation = data.occupation;

            $rootScope.contentDisplayed = $scope.userName;
        });
    });
  }]);

