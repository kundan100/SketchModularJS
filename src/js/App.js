define(['Callbacks', 'Module1', 'Module2', 'colorPicker'], function(Callbacks, Module1, Module2, ColorPicker) {
	/**
    * A module representing a testModule.
    * @exports src/js/Module1
    */

    "use strict";
	console.log("App.js Loaded...", " appGlobals.globals=", appGlobals.globals,  " jquery=", $);
	/**  */
	var module1 = new Module1();
	module1.init();
	// Subscribers for --- module1.update will be called when module2.update will publish that it's DONE.
	//$.Topic( "module2Updated" ).subscribe(module1.update);
	appGlobals.globals.subscribe("module2Updated", module1.update);
	
	//
	var module2 = new Module2();
	module2.init();	
	module2.update();
	
	//
	var colorPicker = new ColorPicker();
	colorPicker.init();
	
	
	
	
	/**
	var component1 = new Component1();
	component1.init();
	*/

	
});