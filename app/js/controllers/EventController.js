'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:RED;">Hi there</span>';
        $scope.sortorder = 'name';
        $scope.event = {
            name: "Such Conference, Much Knowledge",
            date: new Date().getTime(),
            time: new Date().getHours() + ":" + new Date().getMinutes(),
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
                    duration: 1,
                    level: 2,
                    abstract: "In this session you will learn about the blue seats",
                    upVoteCount: 0,
                    imageUrl: "http://www.allsmileys.com/files/ios/1F61C.png"

                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: "John Doe",
                    duration: 2,
                    level: 1,
                    abstract: "This course is easy",
                    upVoteCount: 0,
                    imageUrl: "http://www.macupdate.com/images/icons128/40055.png"
                },
                {
                    name: "This is another cool stuff",
                    creatorName: "Jane Doe",
                    duration: 4,
                    level: 0,
                    abstract: "Fucking nothing",
                    upVoteCount: 0,
                    imageUrl: "http://www.allsmileys.com/files/ios/1F60E.png"
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