define([], function() {
    "use strict";
	console.log("Module2.js Loaded...");
	
    var Module2 = function() {
		console.log("Module2 instantiated...");
		this.init = function() {
			console.log("Module2 > init...");
			addEvents();
		};
		
		this.update = function() {
			console.log("Module2 > update...");
			// Publisher
			//$.Topic("module2Updated").publish("module2 > update > done...");
			//$.Deferred().done( $.Topic("module2Updated").publish).resolve("module2 > update > done...");
			appGlobals.globals.publish("module2Updated", {"name":"module2 > update > done..."});
		};
						
		var addEvents = function(){
			console.log("Module2 > addEvents...");
		};
		
		this.add = function(a, b) {
			console.log("Module2 > add...");
			if(a<0 || b<0){
				return 0;
			}else{
				return a+b;
			}
		};
		
	};	
	return Module2;
});