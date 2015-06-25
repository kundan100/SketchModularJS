//console.log(typeof requirejs)
if( typeof requirejs === 'undefined' ) {
	//for NodeJS
	var requirejs = require("requirejs"); //needed to load require/AMD modules
	var chai = require("chai"); //var assert = require("assert");
	var expect = chai.expect;
	requirejs.config({
		baseUrl: 'js',
		nodeRequire: require
	});	
}else{
	//for Browser
	//var assert = require("../node_modules/chai/chai.js"); //var assert = require("assert");
	//var expect = chai.expect;
}
/*console.log("requirejs=", requirejs)
console.log("chai=", chai)
console.log("expect=", expect)*/

describe('Module2_test', function(){
	//
	var targetModulePath = "../src/js/Module2",
		targetModuleRef,
		targetModule, targetModuleObj;
	var exposedMethods = ["init", "add", "update"]
	
	before(function(done) {
        requirejs([targetModulePath], function(targetModuleRef) {
			targetModule = targetModuleRef;
            targetModuleObj = new targetModule();		
            done(); // We can launch the tests!
        });
    });
	
	describe('All generic tests', function(){
		it('should exist', function(){
			expect(targetModuleObj).exist;
			expect(targetModuleObj).to.be.instanceOf(targetModule);
			var lenTemp = exposedMethods.length;
			for (var i=0; i<lenTemp; i++){
				expect(targetModuleObj[exposedMethods[i]]).exist;
			}
		});
	});
	describe('.add()', function(){		
		it('should return 4 when the parameter is 2 & 2', function(){
			//assert.equal(targetModuleObj.add(2,2), 4);
			expect(targetModuleObj.add(2,2)).equal(4);
		});
		it('should return 0 when any of the parameter is -ve', function(){
			expect(targetModuleObj.add(2,-4)).equal(0);
			expect(targetModuleObj.add(-5,4)).equal(0);
			expect(targetModuleObj.add(-6,-4)).equal(0);
		});
	});
});
