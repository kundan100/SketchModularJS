define([], function() {
    "use strict";
	console.log("Module1.js Loaded...");
    var Module1 = function() {
		console.log("Module1 instantiated...");
		
		this.init = function() {
			console.log("Module1 > init...");
			addEvents();
		}
		
		this.update = function(pm) {
			console.log("Module1 > update...with parameter=", pm);
		}
						
		var addEvents = function(){
			console.log("Module1 > addEvents...");
		}
	}	
	return Module1;
});