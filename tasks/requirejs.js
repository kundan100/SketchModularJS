module.exports = function(grunt, ConfigPaths) {
	console.log("requirejs.js Loaded...");
	//configure npm
	var objConfig = {
		compile: {
			// !! You can drop your app.build.js config wholesale into 'options'
			options: {
				//appDir: "src/",
				//baseUrl: '<%= ConfigPaths.app.JSPath %>',
				baseUrl: "src/" + ConfigPaths.requirejs.baseUrl,
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
				paths: ConfigPaths.requirejs.paths,
				shim: {
					//just backed up for reference
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
				shim: ConfigPaths.requirejs.shim,
				out: ConfigPaths.app.srcPath + ConfigPaths.app.JSPath + "Consolidated.js"
			}
		}
	};
	
	//load npm
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	//
	return objConfig;
}