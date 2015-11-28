/****************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
***************************/
define(["app",
        "tpl!apps/volunteer/check_in_successful/templates/check_in_successful.tpl"],
		function(VolunteerManager, checkInSuccessTpl){
		VolunteerManager.module("VolunteerApp.CheckInSuccessful.View", function(View, VolunteerManager, Backbone, Marionette, $, _){
			View.Page = Marionette.ItemView.extend({
			  template: checkInSuccessTpl,

			  ui: {
				startOverBtn: "#check-in-successful-start-over-btn"
			  },

			  events: {
				"click @ui.startOverBtn": "StartOverOnClick"
			  },

			  StartOverOnClick: function(e){
				e.preventDefault();
				e.stopPropagation();
				VolunteerManager.trigger("welcome:display");
			  }

			});

		});
		
		return VolunteerManager.VolunteerApp.CheckInSuccessful.View;
	});
