/*
   Author: Mark Sun
   Date: 11/15/2015
*/
VolunteerManager.module("VolunteerApp", function(VolunteerApp, VolunteerManager,
   Backbone, Marionette, $, _) {
     VolunteerApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
         "welcomeScreen": "displayWelcomeScreen",
         "applicableOptions": "displayApplicableOptions",
         "individualFinder": "displayIndividualFinder",
         "groupFinder": "displayGroupFinder",
         "signUp": "displaySignUp",
         "checkInSuccessful": "displayCheckInSuccessful"
       }
     })

     var API = {
       displayApplicableOptions: function(){
         VolunteerApp.ApplicableOptions.Controller.display();
       },
       displayWelcomeScreen: function(){
         VolunteerApp.WelcomeScreen.Controller.display();
       },
       displayIndividualFinder: function(){
         VolunteerApp.IndividualFinder.Controller.display();
       },
       displayGroupFinder: function(){
         VolunteerApp.GroupFinder.Controller.display();
       },
       displaySignUp: function(){
         VolunteerApp.SignUp.Controller.display();
       },
       displayCheckInSuccessful: function(){
         VolunteerApp.CheckInSuccessful.Controller.display();
       }
     };

     VolunteerApp.on("start", function(){
       new VolunteerApp.Router({
         controller: API
       })
     })

   });
