VolunteerManager.module("VolunteerApp.CheckInSuccessful", function(CheckInSuccessful
  , VolunteerManager, Backbone, Marionette, $, _){
    CheckInSuccessful.Page = Marionette.ItemView.extend({
      template: "#check-in-successful-template",

      ui: {
        startOverBtn: "#check-in-successful-start-over-btn"
      },

      events: {
        "click @ui.startOverBtn": "StartOverOnClick"
      },

      StartOverOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      }

    })

});
