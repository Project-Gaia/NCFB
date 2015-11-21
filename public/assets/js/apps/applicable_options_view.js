/*
   Author: Mark Sun
   Date: 11/15/2015
*/
VolunteerManager.module("VolunteerApp.ApplicableOptions", function(ApplicableOptions
  , VolunteerManager, Backbone, Marionette, $, _){
    ApplicableOptions.Page = Marionette.ItemView.extend({
      template: "#applicable-options-template",

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

          VolunteerManager.VolunteerApp.IndividualFinder.Controller.display();
          Backbone.history.navigate("individualFinder");
        }
        else if (this.ui.groupRadioBox.is(":checked"))
        {
          VolunteerManager.VolunteerApp.IsGroup = true;
          VolunteerManager.VolunteerApp.IsIndividual = false;
          VolunteerManager.VolunteerApp.IsCourtOrdered = false;

          //TODO: Add controller and view pages for group people finder/adder
        }
        else if (this.ui.courtOrderedRadioBox.is(":checked"))
        {
          VolunteerManager.VolunteerApp.IsCourtOrdered = true;
          VolunteerManager.VolunteerApp.IsGroup = false;
          VolunteerManager.VolunteerApp.IsIndividual = false;

          VolunteerManager.VolunteerApp.IndividualFinder.Controller.display();
          Backbone.history.navigate("individualFinder");
        }

      }

    })

});
