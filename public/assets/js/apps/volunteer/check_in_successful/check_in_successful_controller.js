/****************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
***************************/
define(["app", "apps/volunteer/check_in_successful/check_in_successful_view"], function(VolunteerManager, View){
	VolunteerManager.module("VolunteerApp.CheckInSuccessful", function(CheckInSuccessful, VolunteerManager, Backbone, Marionette, $, _){
		CheckInSuccessful.Controller = {
		  display: function(){
			var check_in_successful_view = new View.Page();
			VolunteerManager.regions.main.show(check_in_successful_view);
		  }
		}
	});
	return VolunteerManager.VolunteerApp.CheckInSuccessful.Controller;
});
