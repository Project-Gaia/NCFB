VolunteerManager.module("VolunteerApp.ApplicableOptions", function(ApplicableOptions
  , VolunteerManager, Backbone, Marionette, $, _){
    ApplicableOptions.Page = Marionette.ItemView.extend({
      template: "#applicable-options-template",

      ui: {
        numHoursSpinner: "#num-hours-spinner",
        btnNext: "#applicable-options-next-btn"
      },

      events: {
        "click @ui.btnNext": "BtnNextOnClick",
      },

      onRender: function(){
        this.ui.numHoursSpinner.spinner();
      },

      BtnNextOnClick: function(){
        
      }

    })

});
