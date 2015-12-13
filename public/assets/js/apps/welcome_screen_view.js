/*
   Author: Mark Sun
   Date: 11/15/2015
*/

VolunteerManager.module("VolunteerApp.WelcomeScreen", function(WelcomeScreen
  , VolunteerManager, Backbone, Marionette, $, _){
    WelcomeScreen.Page = Marionette.ItemView.extend({
      template: "#welcome-screen-template",

      ui: {
        checkIn: "#welcome-check-in-btn",
        checkOut: "#welcome-check-out-btn"
      },

      events: {
        "click @ui.checkIn": "CheckInOnClick",
        "click @ui.checkOut": "CheckOutOnClick"
      },

      onRender: function(){
        // TODO: DEBUG ONLY
        // Reset saved values here
        VolunteerManager.VolunteerApp.PersonCreated = false;
      },

      CheckInOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.IsCheckIn = true;
        VolunteerManager.VolunteerApp.ApplicableOptions.Controller.display();
        Backbone.history.navigate("applicableOptions");
      },

      CheckOutOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();

/*
VolunteerManager.VolunteerApp.IsIndividual = true;
VolunteerManager.VolunteerApp.IsGroup = false;
VolunteerManager.VolunteerApp.IsCourtOrdered = false;

VolunteerManager.VolunteerApp.IndividualFinder.Controller.display();
Backbone.history.navigate("individualFinder");
*/
        VolunteerManager.VolunteerApp.IsIndividual = true;
        VolunteerManager.VolunteerApp.IsCheckIn = false;
        VolunteerManager.VolunteerApp.IndividualFinder.Controller.display();
        Backbone.history.navigate("individualFinder");
      }

    })

});
