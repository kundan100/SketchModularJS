module.exports = function(grunt, configPaths) {
	console.log("jshint.js Loaded...");
	//configure npm
	var objConfig = {
		all: [configPaths.app.appPath+'Gruntfile.js', configPaths.app.srcPath+configPaths.app.JSPath+"**/*.js"],
		options: {
			ignores: [configPaths.app.srcPath+configPaths.app.JSPath+"Consolidated.js", "src/libs/**/*.js"],
			jshintrc: 'tasks/config/.jshintrc'
		}
	};
	//load npm
	grunt.loadNpmTasks("grunt-contrib-jshint");
	//
	return objConfig;
}