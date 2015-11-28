/****************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
***************************/
define(["app",
        "tpl!apps/volunteer/welcome/templates/welcome.tpl"],
		function(VolunteerManager, welcomeTpl){
			VolunteerManager.module("VolunteerApp.Welcome.View", function(View, VolunteerManager, Backbone, Marionette, $, _){
				View.Page = Marionette.ItemView.extend({
				  template: welcomeTpl,

				  ui: {
					checkIn: "#welcome-check-in-btn",
					checkOut: "#welcome-check-out-btn"
				  },

				  events: {
					"click @ui.checkIn": "CheckInOnClick",
					"click @ui.checkOut": "CheckOutOnClick"
				  },

				  onRender: function(){
					// TODO: DEBUG ONLY
					// Reset saved values here
					VolunteerManager.VolunteerApp.PersonCreated = false;
				  },

				  CheckInOnClick: function(e){
					e.preventDefault();
					e.stopPropagation();
					VolunteerManager.trigger("applicableoptions:display");
				  },

				  CheckOutOnClick: function(){
					console.log("Check-out clicked!");
				  }

				});
			});
			
		return VolunteerManager.VolunteerApp.Welcome.View;
   });
