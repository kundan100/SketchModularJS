require([], function() {
    "use strict";
	/**
	* @description test....
	*/
	
	require.config({
		//baseUrl: "/another/path",
		//paths: {
		//"some": "some/v1.0"
		//},
		paths: {
			/*** List of frameworks/libraries to be included in the codebase. ***/
			/*Added below jquery path, so that it can be used without folder hierarchy...*/
			mocha: '../node_modules/mocha/mocha',
			chai: '../node_modules/chai/chai'
		},
		shim: {
			//only for files which do NOT support AMD
			'mocha': {
				exports: 'mocha'
			}
        },
		waitSeconds: 15
	});
        
    //Now Start the main app logic, OR just put it in here
	//TODO : Why concat task is FAILING to understand this????????????
    //require(['Main', 'jquery']);
	
	require(['mocha', 'chai'], function(mocha, chai){
		mocha.setup('bdd');
		window.expect = chai.expect; //http://www.andrewsouthpaw.com/2015/01/08/beginners-guide-to-testing-with-mocha-chai/
		//
		require(['AppMocha']);
	});	
});

require.onError = function(error) {
    "use strict";
    if (error.requireType === 'timeout') {
        console.log('modules: ' + error.requireModules);
    }
    throw error;
};