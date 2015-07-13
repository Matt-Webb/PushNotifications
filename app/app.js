"use strict";


	var _roost = _roost || [];
    _roost.push(['onresult', function(data) {
        // your code goes here, in the callback function
        console.log("onresult", data.tags);
    }]);

	
	//* Roost Push Notification Handlder //
	angular.module('app', ['ui.bootstrap']);

