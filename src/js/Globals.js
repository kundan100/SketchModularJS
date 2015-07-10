define(['../config/ConfigRequire', './../libs/handlebars/handlebars', './../libs/jQuery/jquery'], function(ConfigRequire, Handlebars) {
    "use strict";
	console.log("Globals.js Loaded...Consider (ConfigPaths+Globals) modules as the first dependency of the application!", "ConfigRequire=", ConfigRequire);
	
	
	
	//console.log("__________________", require.toUrl(''));

	
	/** Global object available at application level*/
    var GlobalsObj = {
		publish: function(eventName, data){
			//console.log('GlobalsObj > publish');
			$.Deferred().done( $.Topic(eventName).publish).resolve(data);
		},
		subscribe: function(eventName, callback){
			//console.log('GlobalsObj > subscribe');
			$.Topic(eventName).subscribe(callback);
		},
		loadTemplate: function (domEl, tpl, data) {
			console.log("tpl=", tpl);
			var model = (data) ? data : {};
			$(domEl).html(Handlebars.compile(tpl)(model));
		},
		loadCss: function (url) {
			/*
			* There are issues knowing when a CSS file has been loaded, particularly in Gecko/Firefox when the file is loaded from another domain....
			* Ref : http://requirejs.org/docs/faq-advanced.html
			* IF THIS APPROACH GIVES YOU ERROR, YOU SHOULD DIRECTLY LINK THE CSS FILE IN HTML FILE.
			*/
			var link = document.createElement("link");
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = url;
			document.getElementsByTagName("head")[0].appendChild(link);
		},
		isCSSConcatenated: false
	};
	
	window.appGlobals = {
		globals: GlobalsObj //making the 'GlobalsObj' accessible by 'appGlobals.globals'
    };
	
    return GlobalsObj;
});