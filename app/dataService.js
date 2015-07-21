"use strict";

(function (module) {

	// here we define our data service:
	var dataService = function ($timeout, $http) {

		var getSements = function () {
			return $timeout(function () {
				return $http.get('../data/segments.json').then(function (data) {
					return data.data;
				});
			}, 500);
		};

		var getSelectedSegments = function () {
			return $timeout(function (){
				return $http.get('../data/selected-segments.json').then(function (data) {
					return data.data;
				});
			}, 500);
		};

		var deleteCookie = function(cookieName) {
			// to delete a cookie we simply expire it by setting the date:
			document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
			//console.log(cookieName + " cookie deleted");
		};


		// here is how we access the roost segment info, using generic cookie GET & SET methods:
		var setCookie = function(cookieName, cookieValue, expiryDays) {
			
			//delete any exisiting cookie which may already persists:
			deleteCookie(cookieName);

			//console.log("Adding cookie for " + cookieName + "with value " + cookieValue);

		    var _date = new Date();		    
		    _date.setTime(_date.getTime() + (expiryDays*24*60*60*1000));
		    var expires = "expires="+ _date.toUTCString();
		    var cookie = cookieName + "=" + cookieValue + "; " + expires;
		    document.cookie = cookie;
		};

		var getCookie = function(cookieName) {
		    var name = cookieName + "=";
		    var cookieArray = document.cookie.split(';');

		    for(var i = 0; i < cookieArray.length; i++) {
		        var cookie = cookieArray[i];
		        while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
		        if (cookie.indexOf(name) == 0) {
		        	console.log(cookie);
		        	return cookie.substring(name.length, cookie.length);
		        } 
		    }
		    return "";
		};



		var checkCookie = function() {
		    var user = getCookie("username");
		    if (user != "") {
		        alert("Welcome again " + user);
		    } else {
		        user = prompt("Please enter your name:", "");
		        if (user != "" && user != null) {
		            setCookie("username", user, 1);
		        }
		    }
		};


		return {
			getSegments: getSements,
			getSelectedSegments: getSelectedSegments,
			setCookie: setCookie,
			getCookie: getCookie,
			checkCookie: checkCookie,
			deleteCookie: deleteCookie
		};

	};


	module.factory("dataService", dataService);

}(angular.module('app')));