/**************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
**************************/
define(["app", "apps/volunteer/welcome/welcome_view"], function(VolunteerManager, View){
	VolunteerManager.module("VolunteerApp.Welcome", function(Welcome, VolunteerManager, Backbone, Marionette, $, _){
		Welcome.Controller = {
		  display: function(){
			var welcome_screen_view = new View.Page();
			VolunteerManager.regions.main.show(welcome_screen_view);
		  }
		}
	});
	return VolunteerManager.VolunteerApp.Welcome.Controller;
});
