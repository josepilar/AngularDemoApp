'use strict';

eventsApp.factory('eventData', function ($resource /*eventResource, authService*/ ) {
    var resource = $resource("/events/:id", {id: "@id"});
    return {
    
        getEvent: function (eventId) {
            return resource.get({
                id: eventId
            });
        },

        save : function(event){
            return resource.save(event);
        },
        
        getAllEvents: function(){
            return resource.query();
        }
    };
});