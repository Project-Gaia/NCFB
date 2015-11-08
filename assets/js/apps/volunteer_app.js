VolunteerManager.module("VolunteerApp", function(VolunteerApp, VolunteerManager,
   Backbone, Marionette, $, _) {
     VolunteerApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
         "welcomeScreen": "displayWelcomeScreen",
         "applicableOptions": "displayApplicableOptions"
       }
     })

     var API = {
       displayApplicableOptions: function(){
         VolunteerApp.ApplicableOptions.Controller.display();
         //VolunteerApp.ApplicableOptions.Controller.display();
       },
       displayWelcomeScreen: function(){
         VolunteerApp.WelcomeScreen.Controller.display();
       }
     };

     VolunteerApp.on("start", function(){
       new VolunteerApp.Router({
         controller: API
       })
     })

   });
