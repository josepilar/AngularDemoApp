'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope, eventData) {
    $scope.event = {};
    
    $scope.saveEvent = function (event, newEventForm) {
        if (newEventForm.$valid) {
            eventData.save(event);
            window.location = "/";
        }
    };

    $scope.calcelEvent = function () {
        window.location = "/";
    };
})