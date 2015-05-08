module.exports = function(grunt) {
	'use strict';
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
	
	
	grunt.initConfig({
		/**
		 * Grunt global vars; Many of the Grunt tasks can use these vars.
		 */
		//
		/** imports the JSON metadata stored in package.json into the grunt config. 
		 * Because <% %> template strings may reference any config properties, configuration data like filepaths and file lists may be specified this way to reduce repetition. e.g.-> src: 'src/<%= pkg.name %>.js'
		 */
		//pkg: grunt.file.readJSON('package.json'),
		

		/** Defining Tasks */
		jshint: {
            all: [configPaths.appPath+'Gruntfile.js', configPaths.srcPath+configPaths.JSPath+"**/*.js"],
            options: {
                ignores: [configPaths.srcPath+configPaths.JSPath+"Consolidated.js", "src/libs/**/*.js"],
                jshintrc: 'config/.jshintrc'
            }
        },
		requirejs: {
			compile: {
				// !! You can drop your app.build.js config wholesale into 'options'
				options: {
					//appDir: "src/",
					//baseUrl: '<%= configPaths.JSPath %>',
					baseUrl: configPaths.srcPath + configPaths.JSPath,
					include: ['Main', 'App'],
					//dir: 'target/',
					//optimize: 'uglify',
					optimize: 'none',
					//optimizeCss: 'standard',
					//mainConfigFile:'./src/main.js',
					/*modules:[{
						name:'MyModule'
					}],*/
					//logLevel: 0,
					//findNestedDependencies: true,
					//fileExclusionRegExp: /^\./,
					fileExclusionRegExp: /^(r|build)\.js$/,
					//inlineText: true,
					paths: {
						jquery: '../libs/jQuery/jquery'
					},
					shim: {
						/*'App': {
							deps: ['Globals']
						}*/
						/*underscore: {
							exports: '_'
						},
						backbone: {
							deps: [
								'underscore',
								'jquery'
							],
							exports: 'Backbone'
						},
						backboneLocalstorage: {
							deps: ['backbone'],
							exports: 'Store'
						}*/
					},
					out: configPaths.srcPath + configPaths.JSPath + "Consolidated.js"
				}
			}
		},
		build: {
			//src: 'src/<%= pkg.name %>.js',
			//dest: 'build/<%= pkg.name %>.min.js'
		}
	});
	
	/** Load the plugins/tasks. */
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-jsdoc');
	
	
	/** Register tasks. */
	grunt.registerTask("default", [
        "jshint"
    ]);
	grunt.registerTask("build", [
        "jshint",
        "requirejs"
    ]);
	grunt.registerTask('consolidateJS', ['requirejs']);
		
};