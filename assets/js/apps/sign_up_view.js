VolunteerManager.module("VolunteerApp.SignUp", function(SignUp
  , VolunteerManager, Backbone, Marionette, $, _){
    SignUp.Page = Marionette.ItemView.extend({
      template: "#sign-up-template",

      ui: {
        txtboxFirstName: "#sign-up-first-name-txtbox",
        txtboxLastName: "#sign-up-last-name-txtbox",
        datepicker: "#sign-up-dob-datepicker",
        txtboxEmergencyContact: "#sign-up-emergency-contact",
        txtboxEmergencyContactNumber: "#sign-up-emergency-contact-phone",
        checkboxAgreeTerms: "#sign-up-terms-agreement",
        btnCreate: "#sign-up-create-btn",
        btnCancel: "#sign-up-cancel-btn"
      },

      events: {
        "click @ui.btnCreate": "BtnCreateOnClick",
        "click @ui.btnCancel": "BtnCancelOnClick"
      },

      onRender: function(){
        this.ui.datepicker.datepicker();
      },

      BtnCreateOnClick: function(){
        // TODO: Need to implement
      },

      BtnCancelOnClick: function(){
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      }

    })

});
