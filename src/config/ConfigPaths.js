define(function() {	
	console.log("ConfigPaths.js Loaded...");
	var ConfigPaths = {
		"app": {
			"appPath": "./",
			"srcPath": "./src/",
			"JSPath": "./js/",
			"libsPath": "../libs/",
			"JSDocPath": "./help/JSDoc/"
		},
		"requirejs": {
			"baseUrl": "./js/",
			"paths": {
				"jquery": "../libs/jQuery/jquery",
				"jquery_minicolors": "../libs/jQuery/plugins/jquery-minicolors-master/jquery.minicolors.min",
				"handlebars": "../libs/handlebars/handlebars",
				"text": "../libs/require/plugins/text",
				"colorPicker": "views/ColorPicker"
			},
			"shim": {
			}
		}
	}
	return ConfigPaths;
});