/*
   Author: Mark Sun
   Date: 11/15/2015
*/
VolunteerManager.module("VolunteerApp.CheckInSuccessful", function(CheckInSuccessful
  , VolunteerManager, Backbone, Marionette, $, _){
    CheckInSuccessful.Page = Marionette.ItemView.extend({
      template: "#check-in-successful-template",

      ui: {
        startOverBtn: "#check-in-successful-start-over-btn",
        checkInSuccessfulDiv: "#check-in-successful-div",
        checkOutSuccessfulDiv: "#check-out-successful-div"
      },

      events: {
        "click @ui.startOverBtn": "StartOverOnClick"
      },

      onRender: function(){
        if (!VolunteerManager.VolunteerApp.IsCheckIn)
        {
          this.ui.checkInSuccessfulDiv.addClass("hidden");
          this.ui.checkOutSuccessfulDiv.removeClass("hidden");
        }
      },

      StartOverOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      }

    })

});
