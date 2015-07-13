"use strict";

	var _roost = _roost || [];
    _roost.push(['onresult', function(data) {
        // your code goes here, in the callback function
        console.log("onresult", data);
    }]);



(function () {
	


	//* Roost Push Notification Handlder //
	angular.module('app', ['ui.bootstrap']);

	angular.module('app').controller('MainController', function ($scope, $modal, $log) {

	  $scope.items = [{
	  						id: 1,
	  						name: 'Football',
	  						selected: false
	  					},
	  					{
	  						id: 2,
	  						name: 'Tennis',
	  						selected: false
	  					},
	  					{
	  						id: 3,
	  						name: "Snooker",
	  						selected: true
	  					}];


	  $scope.open = function () {

	    var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'app/modal.html',
	      controller: 'SubscriptionController',
	      size: 'sm',
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (items) {
	      $log.info(items);
	    }, function () {
	      $log.info('Modal closed.');
	    });

	  };

	});


	angular.module('app').controller('SubscriptionController', function ($scope, $modalInstance, items) {

	  $scope.items = items;

	  $scope.ok = function () {
	    $modalInstance.close($scope.items);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };

	});



}());