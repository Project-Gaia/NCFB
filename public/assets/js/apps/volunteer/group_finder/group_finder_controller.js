/****************************
* Author: Mark Sun
* Date: 11/21/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
****************************/
define(["app", "apps/volunteer/group_finder/group_finder_view"], function(VolunteerManager, View){
	VolunteerManager.module("VolunteerApp.GroupFinder", function(GroupFinder, VolunteerManager, Backbone, Marionette, $, _){
		GroupFinder.Controller = {
		  display: function(){
			var group_finder_view = new View.Page();
			VolunteerManager.regions.main.show(group_finder_view);
		  }
		}
	});
	
	return  VolunteerManager.VolunteerApp.GroupFinder.Controller;
});
