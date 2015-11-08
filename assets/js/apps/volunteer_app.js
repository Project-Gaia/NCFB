VolunteerManager.module("VolunteerApp", function(VolunteerApp, VolunteerManager,
   Backbone, Marionette, $, _) {
     VolunteerApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
         "applicableOptions": "displayApplicableOptions"
       }
     })

     var API = {
       displayApplicableOptions: function(){
         console.log("route to applicable options was triggered");
         //VolunteerApp.ApplicableOptions.Controller.display();
       }
     }

   }
