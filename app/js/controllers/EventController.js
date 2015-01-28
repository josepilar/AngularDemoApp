'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red">Hi there</span>';

        $scope.event = {
            name: "Nintendo Conference",
            date: "1/28/2015",
            time: "2:42 pm",
            location: {
                address: "CTM 12015",
                city: "Chihuahua",
                province: "CUU"
            },
            imageUrl: "/img/cool-story-bro-facebook-cover-timeline-banner-for-fb.jpg",
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: "Pinoles",
                    duration: "1 hr",
                    level: "Advanced",
                    abstract: "In this session you will learn about the blue seats",
                    upVoteCount: 0

                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: "John Doe",
                    duration: "2 hr",
                    level: "Easy",
                    abstract: "This course is easy",
                    upVoteCount: 0
                },
                {
                    name: "This is another cool stuff",
                    creatorName: "Jane Doe",
                    duration: "1 hr",
                    level: "None",
                    abstract: "Fucking nothing",
                    upVoteCount: 0
                }
            ]
        }
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);