var assert = require('chai'),
	expect = assert.expect,
    factorial = require('../src/js/Factorial');

describe('Test', function (){
    before(function(){
        // Stuff to do before the tests, like imports, what not
    });

    describe('#factorial()', function (){
        it('should return 1 when given 0', function (){
            //factorial(0).should.equal(1);
			expect( factorial(0) ).to.equal( 1 );
        });

        it('should return 1 when given 1', function (){
            //factorial(1).should.equal(1);
			expect( factorial(1) ).to.equal( 1 );
        });

        it('should return 2 when given 2', function (){
            //factorial(2).should.equal(2);
			expect( factorial(2) ).to.equal( 2 );
        });

        it('should return 6 when given 3', function (){
            //factorial(3).should.equal(6);
			expect( factorial(3) ).to.equal( 6 );
        });
    });

    after(function () {
        // Anything after the tests have finished
    });
});