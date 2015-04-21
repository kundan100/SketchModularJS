define(['Module1'], function(Module1) {
	/**
    * A module representing a testModule.
    * @exports src/js/Module1
    */

    "use strict";
	console.log("App.js Loaded...", appGlobals.globals);
	console.log("jquery=", $);
	/**  */
	var module1 = new Module1();
	module1.init();
	
	/**
	var component1 = new Component1();
	component1.init();
	*/

	
});