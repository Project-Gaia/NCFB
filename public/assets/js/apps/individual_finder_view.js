/*
   Author: Mark Sun
   Date: 11/15/2015
*/
VolunteerManager.module("VolunteerApp.IndividualFinder", function(IndividualFinder
  , VolunteerManager, Backbone, Marionette, $, _){
    IndividualFinder.Page = Marionette.ItemView.extend({
      template: "#individual-finder-template",

      ui: {
        txtboxFirstName: "#individual-finder-first-name-txtbox",
        txtboxLastName: "#individual-finder-last-name-txtbox",
        datepicker: "#individual-finder-dob-datepicker",
        btnFind: "#individual-finder-find-btn",
        btnCheckIn: "#individual-finder-check-in-btn",
        btnCheckOut: "#individual-finder-check-out-btn",
        btnStartOver: "#individual-finder-start-over-btn",
        divCannotFindUser: "#individual-finder-cannot-find-user",
        btnCreateAccount: "#individual-finder-create-account-btn",
        divUserFound: "#individual-finder-record-found",
        divCourtOrderedSection: "#individual-finder-court-ordered-section",
        divCheckInHeader: "#individual-finder-check-in-header-div",
        divCheckOutHeader: "#individual-finder-check-out-header-div",
      },

      events: {
        "click @ui.btnFind": "BtnFindOnClick",
        "click @ui.btnStartOver": "BtnStartOverOnClick",
        "click @ui.btnCreateAccount": "BtnCreateAccount",
        "click @ui.btnCheckIn": "BtnCheckIn",
        "click @ui.btnCheckOut": "BtnCheckOut"
      },

      onRender: function(){
        this.ui.datepicker.datepicker();

        if (VolunteerManager.VolunteerApp.IsCourtOrdered){
          this.ui.divCourtOrderedSection.removeClass("hidden");
        }

        if(!VolunteerManager.VolunteerApp.IsCheckIn){

          // Selectively show the correct header
          this.ui.divCheckInHeader.addClass("hidden");
          this.ui.divCheckOutHeader.removeClass("hidden");

          // Selectively show the correct button
          this.ui.btnCheckIn.addClass("hidden");
          this.ui.btnCheckOut.removeClass("hidden");
        }
      },

      BtnFindOnClick: function(){
        // TODO: Implement find once Database is hooked up
        if (VolunteerManager.VolunteerApp.PersonCreated)
        {
          this.ui.divUserFound.removeClass("hidden");
          if (VolunteerManager.VolunteerApp.IsCheckIn){
            this.ui.btnCheckIn.prop("disabled", false);
          }
          else {
            this.ui.btnCheckOut.prop("disabled", false);
          }
        }
        else
        {
          this.ui.divCannotFindUser.removeClass("hidden");
        }
      },

      BtnStartOverOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      },

      BtnCreateAccount: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.SignUp.Controller.display();
        Backbone.history.navigate("signUp");
      },

      BtnCheckIn: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.CheckInSuccessful.Controller.display();
        Backbone.history.navigate("checkInSuccessful");
      },

      BtnCheckOut: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.CheckInSuccessful.Controller.display();
        Backbone.history.navigate("checkInSuccessful");
      }

    })

});
