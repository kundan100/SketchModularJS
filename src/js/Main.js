require(['../../config/ConfigPaths', 'Globals'], function() {
    "use strict";
	/**
	* @description test....
	*/
	console.log("Main.js Loaded...This is the MAIN ENTRY JS (single point entry); To ensure that ALL the configuration files have been loaded before moving forward, do the appropriate 'shim' dependency configuration.");
    /**
	* Please pass all your configuration dependencies and one main application JS logic file (again, as single entry point to move forward); And to be on safer side (load configuration files before main app logic file), Do the Shim configuration as --- shim: { 'App': { deps: ['Globals'] } }
	* It will ensure that config has been loaded (path vars are available to be used) when you will require those in your module going forward.
	* e.g. If you load 'jquery' without path reference, it won't load from dependency. because at the time of loading jquery, its path is still undefined which will send the call to search it in baseUrl.
	* BUT, if you require jquery in below code, it will load; since the configuration has been loaded from dependency. i.e. HERE ONWARDS YOU CAN USE 'jquery' MODULE WITHOUT PREFIXING ITS PATH!
	*/
        
    //Now Start the main app logic, OR just put it in here
	//TODO : Why concat task is FAILING to understand this????????????
    //require(['Main', 'jquery']);
	
	require(['App']);
	
});

require.onError = function(error) {
    "use strict";
    if (error.requireType === 'timeout') {
        console.log('modules: ' + error.requireModules);
    }
    throw error;
};