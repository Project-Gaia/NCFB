/**************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
**************************/
define(["app", "apps/volunteer/individual_finder/individual_finder_view"], function(VolunteerManager, View){
	VolunteerManager.module("VolunteerApp.IndividualFinder", function(IndividualFinder, VolunteerManager, Backbone, Marionette, $, _){
		IndividualFinder.Controller = {
		  display: function(){
			var individual_finder_view = new View.Page();
			VolunteerManager.regions.main.show(individual_finder_view);
		  }
		}
	});
	
	return VolunteerManager.VolunteerApp.IndividualFinder.Controller;
});
