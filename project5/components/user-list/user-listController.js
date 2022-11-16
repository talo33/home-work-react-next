'use strict';

cs142App.controller('UserListController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.main.title = 'Users';

        $rootScope.FetchModel('/user/list', function(data){
            
            $scope.$apply(function() {
                $scope.userListObjects = data;
                $scope.userNameList = [];
        		$scope.userIdList = [];
        		for (var i = 0; i < $scope.userListObjects.length; i++) {
        			var fullName = $scope.userListObjects[i].first_name + ' ' + $scope.userListObjects[i].last_name;
        			$scope.userNameList.push(fullName);
        			$scope.userIdList.push($scope.userListObjects[i]._id);
        		}
            });
        });
    }]);
