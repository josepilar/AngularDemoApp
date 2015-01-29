'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
    $scope.saveEvent = function (event, newEventForm) {
        console.log(newEventForm);
        if (newEventForm.$valid) {
            window.alert("Event " + event.name + " has been saved!");
        }
    }

    $scope.calcelEvent = function () {
        window.location = "/";
    }
})