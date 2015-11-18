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
        courtOrderedRadioBox: "#applicable-options-court-ordered-radiobox"
      },

      events: {
        "click @ui.btnNext": "BtnNextOnClick",
      },

      onRender: function(){
        this.ui.numHoursSpinner.spinner();
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
