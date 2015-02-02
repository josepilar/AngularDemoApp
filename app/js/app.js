'use strict';

var eventsApp = angular.module('eventsApp', ["ngResource", "ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/newEvent", {
            templateUrl: "/templates/newEvent.html",
            controller: "EditEventController"
        });
        $routeProvider.when("/events", {
            templateUrl: "/templates/EventList.html",
            controller: "EventListController"
        });

        $routeProvider.when("/event/:eventId", {
            templateUrl: "/templates/EventDetails.html",
            controller: "EventController"
        });

        $routeProvider.when("/editProfile", {
            templateUrl: "/templates/EditProfile.html",
            controller: "EditProfileController"
        });

        $routeProvider.when("/notFound", {
            template: '<div class="container"><h1>NOT FOUND</h1><button type="button" ng-click="backToEvents()" class="btn">Back to Events</button></div>',
            controller: "NotFoundController"
        });

        $routeProvider.when("/sampleDirective", {
            templateUrl: "/templates/SampleDirective.html",
            controller: "SampleDirectiveController"
        });

        $routeProvider.otherwise({
            redirectTo: "/events"
        });
    });