define(['Module2'], function(Module2) {
    "use strict";
	console.log("Module1.js Loaded...");
    var Module1 = function() {
		console.log("Module1 instantiated...");
		
		var module2 = new Module2();
		
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