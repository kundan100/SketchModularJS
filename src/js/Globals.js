define(['../config/ConfigPaths', './../libs/handlebars/handlebars', './../libs/jQuery/jquery'], function(ConfigPaths, Handlebars) {
    "use strict";
	console.log("Globals.js Loaded...Consider (ConfigPaths+Globals) modules as the first dependency of the application!", "ConfigPaths=", ConfigPaths);
	
	
	require.config({
		//By default load any module IDs from 'baseUrl'.
		//The baseUrl is normally set to the same directory as the script used in a data-main attribute for the top level script to load for a page.
		//If we don not set it manually, it will consider from 'data-main' attribute of script tag on page.
		//This setting is done relative to page.
		baseUrl: ConfigPaths.JSPath,
		//except, if the module ID starts with "app", load it from the js/app directory.
		//paths config is relative to the baseUrl, and never includes a ".js" extension since
		//the paths config could be for a directory.
		//With the paths config, you can set up locations of a group of scripts.
		paths: {
			// the left side is the module ID,
			// the right side is the path to the jQuery file, relative to baseUrl.
			// Also, the path should NOT include the '.js' file extension.
			//app: '../app',
			/*** List of frameworks/libraries to be included in the codebase. ***/
			/*Added below jquery path, so that it can be used without folder hierarchy...*/
			jquery: ConfigPaths.libsPath + 'jQuery/jquery',
			jquery_minicolors: ConfigPaths.libsPath + 'jQuery/plugins/jquery-minicolors-master/jquery.minicolors.min',
			handlebars: ConfigPaths.libsPath + 'handlebars/handlebars',
			text: ConfigPaths.libsPath + 'require/plugins/text',
			colorPicker: 'views/ColorPicker'
		},
        shim: {
			//only for files which do NOT support AMD
        },
		waitSeconds: 15
    });
	//console.log("__________________", require.toUrl(''));
	//console.log("ConfigPaths=", ConfigPaths.libsPath);

	
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