define([
		"text!../templates/common/headerTpl.html", 
		"text!../templates/common/footerTpl.html",
		"handlebars"
		], function(HeaderTpl, FooterTpl, Handlebars) {
    "use strict";
	console.log("Module1.js Loaded...");
	
    var Module1 = function() {
		console.log("Module1 instantiated...");
		
		this.init = function() {
			console.log("Module1 > init...");
			//
			loadTemplates();
			//
			addEvents();
		};
		
		var loadTemplates = function(){
			console.log("Module1 > loadTemplates...");
			appGlobals.globals.loadTemplate("#header", HeaderTpl, {
				"moduleName": "Module 1 data coming dynamically"
			});
			appGlobals.globals.loadTemplate("#footer", FooterTpl);
		};
		
		this.update = function(pm) {
			console.log("Module1 > update...with parameter=", pm);
		};
						
		var addEvents = function(){
			console.log("Module1 > addEvents...");
		};
	};
	return Module1;
});