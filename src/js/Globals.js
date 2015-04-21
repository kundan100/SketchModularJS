define(['../../config/ConfigPaths'], function(ConfigPaths) {
    "use strict";
	console.log("Globals.js Loaded...Consider (ConfigPaths+Globals) modules as the first dependency of the application!");
	
	
	console.log("ConfigPaths=", ConfigPaths);
	
	
	/** Global object available at application level*/
    var GlobalsObj = {
		fn1: function(){console.log('GlobalsObj > fn1');}
	};
	
	
	
	window.appGlobals = {
		globals: GlobalsObj //making the 'GlobalsObj' accessible by 'appGlobals.globals'
    };
	
	
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
			jquery: ConfigPaths.libsPath + 'jQuery/jquery'
		},
        shim: {
			'Globals': {
				deps: ['../../config/ConfigPaths']
			},
			'App': {
				deps: ['Globals']
			}
        },
		waitSeconds: 10
    });
	//console.log("__________________", require.toUrl(''));
	//console.log("ConfigPaths=", ConfigPaths.libsPath);
	
	
    return GlobalsObj;
});