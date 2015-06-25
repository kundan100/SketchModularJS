module.exports = function(grunt) {
	'use strict';
	/** A Gruntfile is simply a JS file that loads tasks and sets up the configuration*/
	/** Project configuration.*/
	
	var configPaths = (function () {
		/**
		* Read config stored in JS; It will read function body including it's syntax, as text
		* Remove unnecessay parts like 'function', 'return', '{", etc...
		* convert text to JSON and return.
		*/
		var str = grunt.file.read('./config/ConfigPaths.js');
		str = str.split("{");
		str = str[2];
		str = str.split("}");
		str = "{"+(str[0]).trim()+"}";
		return JSON.parse(str);
	})();
	
	/**
	* Loading tasks (kept in seperate js files) from "./tasks/" folder.
	*/
	var gruntConfig = {};
	gruntConfig['jshint'] = require('./tasks/' + 'jshint.js')(grunt, configPaths);
	gruntConfig['requirejs'] = require('./tasks/' + 'requirejs.js')(grunt, configPaths);
	gruntConfig['build'] = require('./tasks/' + 'build.js')(grunt, configPaths);
	grunt.initConfig(gruntConfig);
	//console.log("__________________");
	//console.log(gruntConfig);
		
	
	/** Load the plugins/tasks. --- Done from/inside individual task files*/
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-jsdoc');
	
	
	/** Register tasks. */
	grunt.registerTask("default", [
        "build"
    ]);
	grunt.registerTask("build", [
        "jshint",
        "requirejs"
    ]);
	grunt.registerTask('consolidateJS', ['requirejs']);
		
};