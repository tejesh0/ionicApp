/**
*  Module
*
* Description
*/
angular.module('starter.controllers', [])
	.controller('SignInCtrl', ['$scope', '$firebaseAuth', 
		function($scope, $rootScope, $firebaseAuth){
			//check session
			$rootScope.checkSession();

			$scope.user = {
				email: "",
				password: ""
			};
			$scope.validateUser = function() {
				$rootScope.show()
			}
		
	}])
	.controller('SignUpCtrl', ['$scope', '$firebaseAuth',
		 function($scope, $firebaseAuth){
		
	}])
	.controller('HomeCtrl', ['$scope', '$firebaseAuth',
	 		function($scope, $firebaseAuth){
		
	}])
	.controller('RequestCtrl' ['$scope', '$firebaseAuth',
		function($scope, $firebaseAuth){

	}])
	.controller('AssignCtrl' ['$scope', '$firebaseAuth',
		function($scope, $firebaseAuth){

	}])
	