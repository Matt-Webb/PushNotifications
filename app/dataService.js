"use strict";

(function (module) {

	// here we define our data service:
	var dataService = function ($timeout, $http) {

		var getSements = function () {
			return $timeout(function () {
				return $http.get('data/segments.json').then(function (data) {
					return data.data;
				});
			}, 500);
		};

		var getSelectedSegments = function () {
			return $timeout(function (){
				return $http.get('data/selected-segments.json').then(function (data) {
					return data.data;
				});
			}, 500);
		};

		return {
			getSegments: getSements,
			getSelectedSegments: getSelectedSegments
		};

	};


	module.factory("dataService", dataService);

}(angular.module('app')));