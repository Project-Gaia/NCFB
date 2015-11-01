VolunteerManager.module("VolunteerApp.ApplicableOptions", function(ApplicableOptions
  , VolunteerManager, Backbone, Marionette, $, _){
    ApplicableOptions.Page = Marionette.ItemView.extend({
      template: "#applicable-options-template",

      ui: {
        numHoursSpinner: "#num-hours-spinner"
      },

      onRender: function(){
        this.ui.numHoursSpinner.spinner();
      }

    })

});
