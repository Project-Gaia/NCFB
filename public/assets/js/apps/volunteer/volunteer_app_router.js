/********************************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date 11/27/2015
*********************************************/
define(["app"], function(VolunteerManager){
	VolunteerManager.module("Routers.VolunteerApp", function(VolunteerAppRouter, VolunteerManager, Backbone, Marionette, $, _) {
		VolunteerAppRouter.Router = Marionette.AppRouter.extend({
			appRoutes: {
			 "applicableOptions": "displayApplicableOptions",
			 "welcome": "displayWelcomeScreen",
			 "individualFinder": "displayIndividualFinder",
			 "groupFinder": "displayGroupFinder",
			 "signUp": "displaySignUp",
			 "checkInSuccessful": "displayCheckInSuccessful"
			}
	});
	 
	var executeAction = function(action, arg){
	  VolunteerManager.startSubApp("VolunteerApp");
	  action(arg);
	};

	var API = {
		displayApplicableOptions: function(){
			require(["apps/volunteer/applicable_options/applicable_options_controller"], function(ApplicableOptionsController)
			{
				executeAction(ApplicableOptionsController.display);
			});
		},
		displayWelcomeScreen: function(){
			require(["apps/volunteer/welcome/welcome_controller"], function(WelcomeController)
			{
				executeAction(WelcomeController.display);
			});
		},
		displayIndividualFinder: function(){
			require(["apps/volunteer/individual_finder/individual_finder_controller"], function(IndividualFinderController)
			{
				executeAction(IndividualFinderController.display);
			});
		},
		displayGroupFinder: function(){
			require(["apps/volunteer/group_finder/group_finder_controller"], function(GroupFinderController)
			{
				executeAction(GroupFinderController.display);
			});
		},
		displaySignUp: function(){
			require(["apps/volunteer/sign_up/sign_up_controller"], function(SignUpController)
			{
				executeAction(SignUpController.display);
			});
		},
		displayCheckInSuccessful: function(){
			require(["apps/volunteer/check_in_successful/check_in_successful_controller"], function(CheckInSuccessfulController)
			{
				executeAction(CheckInSuccessfulController.display);
			});
		}
	};
	
	VolunteerManager.on("applicableoptions:display", function(){
		VolunteerManager.navigate("applicableOptions");
		API.displayApplicableOptions();
	});
	
	VolunteerManager.on("welcome:display", function(){
		VolunteerManager.navigate("welcome");
		API.displayWelcomeScreen();
	});
	
	VolunteerManager.on("individualfinder:display", function(){
		VolunteerManager.navigate("individualFinder");
		API.displayIndividualFinder();
	});
	
	VolunteerManager.on("groupfinder:display", function(){
		VolunteerManager.navigate("groupFinder");
		API.displayGroupFinder();
	});
	
	VolunteerManager.on("signup:display", function(){
		VolunteerManager.navigate("welcome");
		API.displaySignUp();
	});
	
	VolunteerManager.on("checkinsuccess:display", function(){
		VolunteerManager.navigate("checkInSuccessful");
		API.displayCheckInSuccessful();
	});

	VolunteerManager.Routers.on("start", function(){
		new VolunteerAppRouter.Router({
			controller: API
		});
	});

   });
   
   return VolunteerManager.Router;
});