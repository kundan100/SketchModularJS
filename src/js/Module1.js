define([
	"text!templates/headerTpl.html", 
	"text!templates/footerTpl.html",
	"handlebars"
	], function(HeaderTpl, FooterTpl, Handlebars) {
    
    "use strict";
	console.log("Module1.js Loaded...");
    
    var Module1 = function() {
		console.log("Module1 instantiated...");
		
		this.init = function() {
			console.log("Module1 > init...");
			
			this.template("#header", HeaderTpl, {
				"moduleName": "Module 1"
			});
			this.template("#footer", FooterTpl);

			addEvents();
		};
			
		this.template = function(domEl, tpl, data) {
			console.log(tpl);
			var model = (data) ? data : {};
			$(domEl).html(Handlebars.compile(tpl)(model));
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