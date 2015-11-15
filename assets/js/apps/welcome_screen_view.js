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
        VolunteerManager.VolunteerApp.PersonCreated = false;
      },

      CheckInOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.ApplicableOptions.Controller.display();
        Backbone.history.navigate("applicableOptions");
      },

      CheckOutOnClick: function(){
        console.log("Check-out clicked!");
      }

    })

});
