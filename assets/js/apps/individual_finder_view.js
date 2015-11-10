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
        btnStartOver: "#individual-finder-start-over-btn",
        divCannotFindUser: "#individual-finder-cannot-find-user",
        btnCreateAccount: "#individual-finder-create-account-btn"
      },

      events: {
        "click @ui.btnFind": "BtnFindOnClick",
        "click @ui.btnStartOver": "BtnStartOverOnClick",
        "click @ui.btnCreateAccount": "BtnCreateAccount"
      },

      onRender: function(){
        this.ui.datepicker.datepicker();
      },

      BtnFindOnClick: function(){
        // TODO: Implement find once Database is hooked up
        this.ui.divCannotFindUser.removeClass("hidden");
        this.ui.divCannotFindUser.addClass("visible");
      },

      BtnStartOverOnClick: function(){
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      },

      BtnCreateAccount: function(){
        VolunteerManager.VolunteerApp.SignUp.Controller.display();
        Backbone.history.navigate("signUp");
      }

    })

});
