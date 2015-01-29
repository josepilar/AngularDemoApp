'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams) {

        $scope.snippet = '<span style="color:RED;">Hi there</span>';
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId);

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
        
        $scope.scrollToSession = function (){
          $anchorScroll();  
        };
    }
);