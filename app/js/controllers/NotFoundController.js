'use strict';

eventsApp.controller('NotFoundController',
    function EventListController($scope, $location) {
      $scope.backToEvents = function () {
        $location.url('/events');
      };
    }
);