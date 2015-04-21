define(['jquery'], function($) {
    "use strict";
	console.log("Module2.js Loaded...", appGlobals.globals);
	appGlobals.globals.fn1();
    var Module2 = function() {
		console.log("Module2 instantiated...");
		this.init = function() {
			console.log("Module2 > init...");
			addEvents();
		}
						
		var addEvents = function(){
			console.log("Module2 > addEvents...");
		}
	}	
	return Module2;
});