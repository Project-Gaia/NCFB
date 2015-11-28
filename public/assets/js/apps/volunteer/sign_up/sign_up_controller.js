/**************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa  
* Date: 11/27/2015
**************************/
define(["app", "apps/volunteer/sign_up/sign_up_view"], function(VolunteerManager, View){
	VolunteerManager.module("VolunteerApp.SignUp", function(SignUp, VolunteerManager, Backbone, Marionette, $, _){
		SignUp.Controller = {
		  display: function(){
			var sign_up_view = new View.Page();
			VolunteerManager.regions.main.show(sign_up_view);
		  }
		}

		SignUp.Model = Backbone.Model.extend({
		  defaults: {
			firstName:"",
			lastName:"",
			dateOfBirth:"",
			EmergencyContact:""
		  }
		})
	});

	return VolunteerManager.VolunteerApp.SignUp.Controller;
});
