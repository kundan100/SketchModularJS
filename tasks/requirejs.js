module.exports = function(grunt, configPaths) {
	console.log("requirejs.js Loaded...");
	//configure npm
	var objConfig = {
		compile: {
			// !! You can drop your app.build.js config wholesale into 'options'
			options: {
				//appDir: "src/",
				//baseUrl: '<%= configPaths.app.JSPath %>',
				baseUrl: configPaths.app.srcPath + configPaths.app.JSPath,
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
					jquery: configPaths.app.libsPath+'jQuery/jquery',
					jquery_minicolors: configPaths.app.libsPath + 'jQuery/plugins/jquery-minicolors-master/jquery.minicolors.min',
					handlebars: configPaths.app.libsPath+'handlebars/handlebars',
					text: configPaths.app.libsPath+'require/plugins/text',
					colorPicker: 'views/ColorPicker'
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
				out: configPaths.app.srcPath + configPaths.app.JSPath + "Consolidated.js"
			}
		}
	};
	
	//load npm
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	//
	return objConfig;
}