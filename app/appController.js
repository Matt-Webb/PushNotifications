"use strict";

angular.module('app').controller('MainController', function ($scope, $modal, $log, $timeout, dataService) {

    $log.info("Main Controller reporting for duty!");

    // UI storage for segments retreived from the server:
    var items = [];
    $scope.isLoaded = false;
    $scope.hasError = false;
    $scope.firstTime = window.roostFirstTime;


    // call data service to get all available segments:

    var getAvailableSegments = function () {

        dataService.getSegments().then(function (data) {

            var roostCookie = dataService.getCookie('roostSegments'),
                roostCookieArray = roostCookie.split('|');

            roostCookieArray.forEach(function (roostSegment) {

                data.segments.forEach(function (segment) {

                    var item = {
                        id: segment.id,
                        name: segment.name
                    };

                    if(roostSegment === segment.name) {
                        item.selected = true;
                    } else {
                        item.selected = false; // not strictly required.
                    }

                    // avoids adding multiple segments to our array: 
                    var result = $.grep(items, function(e){ return e.name == item.name; });

                    if(result.length === 0){
                        items.push(item);
                    };
                });
            });

            // check we have some items to bind to scope:
            if (!$.isEmptyObject(items)) {
                $scope.items = items;
            }

        }, function (data) {
            //$log.error('Data Service Error: getSegments() failed ' + data);
            $scope.hasError = true;
        });

    };

    $timeout(function (){
        dataService.setCookie('roostSegments', window.roostTags, 1);
        getAvailableSegments();

    }, 1000);

    
    $scope.open = function () {

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../app/modal.html',
            controller: 'SubscriptionController',
            size: 'sm',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });


        dataService.setCookie('roostSegments', window.roostTags, 1);
        
        getAvailableSegments();

        modalInstance.result.then(function (items) {
            $log.info(items);
        }, function () {
            //$log.info('Modal closed.');
        });

    };

});


angular.module('app').controller('SubscriptionController', function ($scope, $modalInstance, items) {

    $scope.items = items;

    $scope.ok = function () {

        //window.addRoostSegments();

        $modalInstance.close($scope.items);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});

