/***********************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
***********************************/
define(["app",
        "tpl!apps/volunteer/applicable_options/templates/applicable_options.tpl"],
		function(VolunteerManager, applicableOptionsTpl){
		VolunteerManager.module("VolunteerApp.ApplicableOptions.View", function(View, VolunteerManager, Backbone, Marionette, $, _){
		View.Page = Marionette.ItemView.extend({
		  template: applicableOptionsTpl,

		  ui: {
			numHoursSpinner: "#num-hours-spinner",
			btnNext: "#applicable-options-next-btn",
			individualRadioBox: "#applicable-options-individual-radio-box",
			groupRadioBox: "#applicable-options-group-radio-box",
			courtOrderedRadioBox: "#applicable-options-court-ordered-radiobox",
			divGroupSection: "#applicable-options-group-picker-section"
		  },

		  events: {
			"click @ui.btnNext": "BtnNextOnClick",
			"click @ui.groupRadioBox": "RadioBoxGroupOnClick",
			"click @ui.individualRadioBox" : "RadioBoxIndividualOnClick",
			"click @ui.courtOrderedRadioBox" : "RadioBoxCourtOrderedOnClick"
		  },

		  onRender: function(){
			this.ui.numHoursSpinner.spinner();
		  },

		  RadioBoxCourtOrderedOnClick: function(){
			if (this.ui.divGroupSection.is(":visible")){
			  this.ui.divGroupSection.addClass("hidden");
			}
		  },

		  RadioBoxIndividualOnClick: function(){
			if (this.ui.divGroupSection.is(":visible")){
			  this.ui.divGroupSection.addClass("hidden");
			}
		  },

		  RadioBoxGroupOnClick: function(){

			this.ui.divGroupSection.removeClass("hidden");

			//TODO: This will need to be retrieved from the DB
			var group_names = [
			  "IBM",
			  "Cisco",
			  "Red Hat",
			  "Blue Shield Blue Cross",
			  "Metlife",
			  "Bronto",
			  "Fedelity",
			  "Cerner"
			];

			$("#applicable-options-group-picker-dropdown").autocomplete({
			  source: group_names
			});


		  },

		  BtnNextOnClick: function(e){
			e.preventDefault();
			e.stopPropagation();

			// Check to see which options are clicked
			if (this.ui.individualRadioBox.is(":checked"))
			{
			  VolunteerManager.VolunteerApp.IsIndividual = true;
			  VolunteerManager.VolunteerApp.IsGroup = false;
			  VolunteerManager.VolunteerApp.IsCourtOrdered = false;

			  VolunteerManager.trigger("individualfinder:display");
			}
			else if (this.ui.groupRadioBox.is(":checked"))
			{
			  VolunteerManager.VolunteerApp.IsGroup = true;
			  VolunteerManager.VolunteerApp.IsIndividual = false;
			  VolunteerManager.VolunteerApp.IsCourtOrdered = false;

			  VolunteerManager.trigger("groupfinder:display");
			}
			else if (this.ui.courtOrderedRadioBox.is(":checked"))
			{
			  VolunteerManager.VolunteerApp.IsCourtOrdered = true;
			  VolunteerManager.VolunteerApp.IsGroup = false;
			  VolunteerManager.VolunteerApp.IsIndividual = false;

			  VolunteerManager.trigger("individualfinder:display");
			}
		  }

		});
	});
	
	return VolunteerManager.VolunteerApp.ApplicableOptions.View;
});