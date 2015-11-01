VolunteerManager.module("VolunteerApp.ApplicableOptions", function(ApplicableOptions
  , VolunteerManager, Backbone, Marionette, $, _){
    ApplicableOptions.Controller = {

      display: function(){

        var applicable_options_view = new ApplicableOptions.Page();
        VolunteerManager.regions.main.show(applicable_options_view);

      }

    }

});
