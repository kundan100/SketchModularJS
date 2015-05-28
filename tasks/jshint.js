module.exports = function(grunt, configPaths) {
	console.log("jshint.js Loaded...");
	return {	
		all: [configPaths.appPath+'Gruntfile.js', configPaths.srcPath+configPaths.JSPath+"**/*.js"],
		options: {
			ignores: [configPaths.srcPath+configPaths.JSPath+"Consolidated.js", "src/libs/**/*.js"],
			jshintrc: 'config/.jshintrc'
		}		
	}
}