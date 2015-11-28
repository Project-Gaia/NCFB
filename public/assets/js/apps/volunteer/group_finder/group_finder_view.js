/****************************
* Author: Mark Sun
* Date: 11/21/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
***************************/
define(["app",
        "tpl!apps/volunteer/group_finder/templates/group_finder.tpl"],
		function(VolunteerManager, groupFinderTpl){
		VolunteerManager.module("VolunteerApp.GroupFinder.View", function(View, VolunteerManager, Backbone, Marionette, $, _){
			View.Page = Marionette.ItemView.extend({
			  template: groupFinderTpl,

			  ui: {
				txtboxFirstName: "#group-finder-first-name-txtbox",
				txtboxLastName: "#group-finder-last-name-txtbox",
				datepicker: "#group-finder-dob-datepicker",
				btnFind: "#group-finder-find-btn",
				btnCheckIn: "#group-finder-check-in-btn",
				btnStartOver: "#group-finder-start-over-btn"
			  },

			  events: {
				"click @ui.btnFind": "BtnFindOnClick",
				"click @ui.btnStartOver": "BtnStartOverOnClick",
				"click @ui.btnCheckIn": "BtnCheckIn"
			  },

			  onRender: function(){
				this.ui.datepicker.datepicker();
			  },

			  BtnFindOnClick: function(){
				// TODO: Implement find once Database is hooked up
			  },

			  BtnStartOverOnClick: function(e){
				e.preventDefault();
				e.stopPropagation();
				VolunteerManager.trigger("welcome:display");
			  },

			  BtnCheckIn: function(e){
				e.preventDefault();
				e.stopPropagation();
				VolunteerManager.trigger("checkinsuccess:display");
			  }
			  
			});
		});
		
		return VolunteerManager.VolunteerApp.GroupFinder.View;
	});