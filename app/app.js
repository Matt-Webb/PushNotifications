"use strict";

angular.module('app', ['ui.bootstrap']);

console.log("app initialised!");

/*
(function() {

    var roostPlaceHolder = document.getElementById('roost');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/roost_worker.js';

    // Add the script element to the head
    roostPlaceHolder.appendChild(script);
    console.log("roost script added!");


    //loadJs();

}());
*/

$(".toggle").click(function(event) {

	console.log("Clicked!!");
    event.preventDefault();
    $("div.overlay").fadeToggle("fast");
});
