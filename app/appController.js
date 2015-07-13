"use strict";

angular.module('app').controller('MainController', function ($scope, $modal, $log, dataService) {

    // UI storage for segments retreived from the server:
    var items = [];
    $scope.isLoaded = false;
    $scope.hasError = false;

    // call data service to get all available segments:
    dataService.getSegments().then(function (data) {
        $log.info('successfully retreived the data!');

        data.segments.forEach(function (segment) {
            var item = {
                id: segment.id,
                name: segment.name,
                selected: false // default all reteived segments to false.
            };
            items.push(item);
        });

        // check we have some items to bind to scope:
        if (!$.isEmptyObject(items)) {
            $scope.items = items;
        }

    }, function (data) {
        $log.error('Data Service Error: getSegments() failed ' + data);
        $scope.hasError = true;
    });

    // call data service to get the users active segements:
    dataService.getSelectedSegments().then(function (data) {

        items.forEach(function (item) {

            data.selected.forEach(function (id) {

                if (item.id === id) {
                    item.selected = true;
                };
            });

        });
    }, function (data) {
        $log.error('Data Service Error: getSelectedSegments() failed ' + data);
        $scope.hasError = true;
    });


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

