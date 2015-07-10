# Broken functionalities
* ALL working fine

# Hot to test if everything is working fine, after some change
* grunt ---> runs all the grunt tasks; see if nothing is broken on console
* npm test ---> see if nothing is broken on the console
* src/index.html in browser (FF) ---> see if there is no error in console and page renders
* test/index_test.html in browser (FF) ---> see if there is no error in console and page renders with all tests passed

# SketchRequireJS
A skeleton for modular JS based project.
* For script/module loading ---> require.js
* For file concatenation ---> "grunt-contrib-requirejs": "^0.4.4"
* jQuery v1.10.2 ---> you can use/omit it.
* Mocha, Chai, expect ----> test framework


# HowTo:
* Grunt Tasks
  1. build / default = linting+concatenation
  2. requirejs / consolidateJS
* Test Framework
  1. Keep all the test case files in "test" folder
  2. Run from browser : index_test.html
  3. Run from CLI : npm test



# Pre-requisite:




# Getting Started:



# TODO:
* Spell check implementation
