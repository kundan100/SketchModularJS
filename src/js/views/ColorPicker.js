define([
		"text!../templates/colorPickerTpl.html"
		], function(colorPickerTpl) {
    "use strict";
	console.log("ColorPicker.js Loaded...");
	
	appGlobals.globals.loadCss("libs/jQuery/plugins/jquery-minicolors-master/jquery.minicolors.css");
	
    var ColorPicker = function() {
		console.log("ColorPicker instantiated...");
		
		this.init = function() {
			console.log("ColorPicker > init...");
			//
			loadTemplates();			
			//
			configure();
			//
			addEvents();			
		};
		
		var loadTemplates = function(){
			console.log("ColorPicker > loadTemplates...");
			appGlobals.globals.loadTemplate("#colorPicker", colorPickerTpl, {
				//"moduleName": "Module 1 data coming dynamically"
			});
		};
		
		this.update = function(pm) {
			console.log("ColorPicker > update...with parameter=", pm);
		};
						
		var addEvents = function(){
			console.log("ColorPicker > addEvents...");
		};
		
		var configure = function(){
			console.log("ColorPicker > configure...");
			$('.demo').each( function() {
				//
				// Dear reader, it's actually very easy to initialize MiniColors. For example:
				//
				//  $(selector).minicolors();
				//
				// The way I've done it below is just for the demo, so don't get confused
				// by it. Also, data- attributes aren't supported at this time. Again,
				// they're only used for the purposes of this demo.
				//
				$(this).minicolors({
					control: $(this).attr('data-control') || 'hue',
					defaultValue: $(this).attr('data-defaultValue') || '',
					inline: $(this).attr('data-inline') === 'true',
					letterCase: $(this).attr('data-letterCase') || 'lowercase',
					opacity: $(this).attr('data-opacity'),
					position: $(this).attr('data-position') || 'bottom left',
					change: function(hex, opacity) {
						var log;
						try {
							log = hex ? hex : 'transparent';
							if( opacity ) log += ', ' + opacity;
							console.log(log);
						} catch(e) {}
					},
					theme: 'default'
				});
			});
		};
		
	};
	return ColorPicker;
});