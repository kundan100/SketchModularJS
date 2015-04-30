define(['jquery'], function() {
    "use strict";
	console.log("Callbacks.js Loaded...");
	
    var topics = {};
    jQuery.Topic = function(id) {
        var callbacks, method,
			topic = id && topics[ id ];
        
		if (!topic) {
            callbacks = jQuery.Callbacks();
            topic = {
				publish: callbacks.fire,
				subscribe: callbacks.add,
				unsubscribe: function() {
					callbacks.remove;
					//delete topics[id];
				}
			};
            if (id) {
                topics[ id ] = topic;
            }
        }
        return topic;
    };
});
