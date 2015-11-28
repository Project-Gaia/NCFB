/***********************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
***********************************/
define(["marionette", "jquery-ui"], function(Marionette){
	var VolunteerManager = new Marionette.Application();

	VolunteerManager.on("before:start", function(){
	  var RegionContainer = Marionette.LayoutView.extend({
		el: "#app-container",

		regions: {
		  main: "#main-region"
		}
	  });

	  VolunteerManager.regions = new RegionContainer();
	})

	VolunteerManager.navigate = function(route,  options){
	  options || (options = {});
	  Backbone.history.navigate(route, options);
	};

	VolunteerManager.getCurrentRoute = function(){
	  return Backbone.history.fragment
	};
	
	VolunteerManager.startSubApp = function(appName, args){
		var currentApp = appName ? VolunteerManager.module(appName) : null;
		if (VolunteerManager.currentApp === currentApp){ return; }

		if (VolunteerManager.currentApp){
		  VolunteerManager.currentApp.stop();
		}

		VolunteerManager.currentApp = currentApp;
		if(currentApp){
		  currentApp.start(args);
		}
	};

	VolunteerManager.on("start", function(){

	  if(Backbone.history){
		  require(["apps/volunteer/volunteer_app"], function () {
			Backbone.history.start();

			if(VolunteerManager.getCurrentRoute() === ""){
				VolunteerManager.trigger("welcome:display");
			}
		  });
		}
	});

	return VolunteerManager;
});
