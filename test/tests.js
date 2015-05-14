'use strict';

describe('Module 1', function() {

    var chai = require('chai');
    var expect = chai.expect;

    // this is BDD.

    before(function() {
        // runs before all tests in this block
        console.log("Runs before all tests in this block");
    })
    after(function() {
        // runs after all tests in this block
        console.log("Runs after all tests in this block");
    })
    beforeEach(function() {
        // runs before each test in this block
        console.log("Runs before each test in this block");
    })
    afterEach(function() {
        // runs after each test in this block
        console.log("Runs after each test in this block");
    })
    // test cases

    describe("Equal", function() {
        it("Should be equal", function() {
            expect("string").to.be.a('string');
        });
    });
})