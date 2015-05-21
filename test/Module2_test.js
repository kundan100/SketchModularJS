var requirejs = require("requirejs");
var assert = require("assert");
requirejs.config({
	baseUrl: 'js',
    nodeRequire: require
});

describe('Module2_test _____', function(){
	var module2;
	before(function(done) {
        requirejs(['../src/js/Module2'], function(Module2) {
            module2 = new Module2();
            done(); // We can launch the tests!
        });
    });
	
	describe('.add() __', function(){
		it('should return 4 when the parameter is 2 & 2', function(){
			assert.equal(module2.add(2,2), 4)
		});
		it('should return 0 when any of the parameter is -ve', function(){
			assert.equal(module2.add(2,-4), 0);
			assert.equal(module2.add(-5,4), 0);
			assert.equal(module2.add(-5,-4), 0);
		});
	})
	
	
});
