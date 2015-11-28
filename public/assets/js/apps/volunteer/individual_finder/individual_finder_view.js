/**************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
**************************/
define(["app",
        "tpl!apps/volunteer/individual_finder/templates/individual_finder.tpl"],
		function(VolunteerManager, individualFinder){
			VolunteerManager.module("VolunteerApp.IndividualFinder.View", function(View, VolunteerManager, Backbone, Marionette, $, _){
			View.Page = Marionette.ItemView.extend({
			  template: individualFinder,

			  ui: {
				txtboxFirstName: "#individual-finder-first-name-txtbox",
				txtboxLastName: "#individual-finder-last-name-txtbox",
				datepicker: "#individual-finder-dob-datepicker",
				btnFind: "#individual-finder-find-btn",
				btnCheckIn: "#individual-finder-check-in-btn",
				btnStartOver: "#individual-finder-start-over-btn",
				divCannotFindUser: "#individual-finder-cannot-find-user",
				btnCreateAccount: "#individual-finder-create-account-btn",
				divUserFound: "#individual-finder-record-found",
				divCourtOrderedSection: "#individual-finder-court-ordered-section"
			  },

			  events: {
				"click @ui.btnFind": "BtnFindOnClick",
				"click @ui.btnStartOver": "BtnStartOverOnClick",
				"click @ui.btnCreateAccount": "BtnCreateAccount",
				"click @ui.btnCheckIn": "BtnCheckIn"
			  },

			  onRender: function(){
				this.ui.datepicker.datepicker();

				if (VolunteerManager.VolunteerApp.IsCourtOrdered){
				  this.ui.divCourtOrderedSection.removeClass("hidden");
				}
			  },

			  BtnFindOnClick: function(){
				// TODO: Implement find once Database is hooked up
				if (VolunteerManager.VolunteerApp.PersonCreated)
				{
				  this.ui.divUserFound.removeClass("hidden");
				  this.ui.btnCheckIn.prop("disabled", false);
				}
				else
				{
				  this.ui.divCannotFindUser.removeClass("hidden");
				}
			  },

			  BtnStartOverOnClick: function(e){
				e.preventDefault();
				e.stopPropagation();
				VolunteerManager.trigger("welcome:display");
			  },

			  BtnCreateAccount: function(e){
				e.preventDefault();
				e.stopPropagation();
				VolunteerManager.trigger("signup:display");
			  },

			  BtnCheckIn: function(e){
				e.preventDefault();
				e.stopPropagation();
				VolunteerManager.trigger("checkinsuccess:display");
			  }

			});
		});
		
		return VolunteerManager.VolunteerApp.IndividualFinder.View;
	});
