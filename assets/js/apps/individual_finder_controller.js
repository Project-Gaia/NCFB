VolunteerManager.module("VolunteerApp.IndividualFinder", function(IndividualFinder
  , VolunteerManager, Backbone, Marionette, $, _){
    IndividualFinder.Controller = {
      display: function(){
        var individual_finder_view = new IndividualFinder.Page();
        VolunteerManager.regions.main.show(individual_finder_view);
      }
    }
});
