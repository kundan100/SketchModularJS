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
	var expect = chai.expect;
}
/*console.log("requirejs=", requirejs)
console.log("chai=", chai)
console.log("expect=", expect)*/

describe('Module2_test_____', function(){
	//
	var module2;
	before(function(done) {
        requirejs(['../src/js/Module2'], function(Module2) {
            module2 = new Module2();			
            done(); // We can launch the tests!
        });
    });
	
	describe('All generic tests__', function(){
		it('should exist', function(){
			expect(module2).exist;
		});
	});
	describe('.add()__', function(){
		
		it('should return 4 when the parameter is 2 & 2', function(){
			//assert.equal(module2.add(2,2), 4);
			expect(module2.add(2,2)).equal(4);
			
		});
		it('should return 0 when any of the parameter is -ve', function(){
			//assert.equal(module2.add(2,-4), 0);
			//assert.equal(module2.add(-5,4), 0);
			//assert.equal(module2.add(-5,-4), 0);
		});
	});
});
