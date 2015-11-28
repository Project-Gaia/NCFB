/***********************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
***********************************/
define(["app", "apps/volunteer/applicable_options/applicable_options_view"], function(VolunteerManager, View){
	VolunteerManager.module("VolunteerApp.ApplicableOptions", function(ApplicableOptions, VolunteerManager, Backbone, Marionette, $, _){
		ApplicableOptions.Controller = {
		  display: function(){
			var applicable_options_view = new View.Page();
			VolunteerManager.regions.main.show(applicable_options_view);
		  }
		}
	});
	return VolunteerManager.VolunteerApp.ApplicableOptions.Controller;
});
