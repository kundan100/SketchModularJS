module.exports = function(grunt, configPaths) {
	console.log("requirejs.js Loaded...");
	//configure npm
	var objConfig = {
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
					jquery: configPaths.libsPath+'jQuery/jquery',
					handlebars: configPaths.libsPath+'handlebars/handlebars',
					text: configPaths.libsPath+'require/plugins/text'
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
	};
	
	//load npm
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	//
	return objConfig;
}