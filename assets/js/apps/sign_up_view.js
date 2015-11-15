VolunteerManager.module("VolunteerApp.SignUp", function(SignUp
  , VolunteerManager, Backbone, Marionette, $, _){

    // Define our modal view class for the terms
    var Modal = Backbone.Modal.extend({
      template: '#modal-template',
      cancelEl: '#btn-disagree-terms',
      submitEl: '#btn-agree-terms'
    });

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
        btnCancel: "#sign-up-cancel-btn",
        linkTerms: "#terms-link"
      },

      events: {
        "click @ui.btnCreate": "BtnCreateOnClick",
        "click @ui.btnCancel": "BtnCancelOnClick",
        "click @ui.linkTerms": "LinkTermsOnClick",
      },

      onRender: function(){
        this.ui.datepicker.datepicker();
      },

      LinkTermsOnClick: function(){
        // Render an instance of your modal
        var modalView = new Modal();

        $('#terms-modal-container').html(modalView.render().el);

        $("#btn-agree-terms").on("click", function(){
          console.log("user agrees!");
        });

        $("#btn-disagree-terms").on("click", function(){
          console.log("user disagrees!");
        });
      },

      BtnCreateOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        // TODO: DEBUG ONLY
        VolunteerManager.VolunteerApp.PersonCreated = true;
        VolunteerManager.VolunteerApp.IndividualFinder.Controller.display();
        Backbone.history.navigate("individualFinder");
      },

      BtnCancelOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      }

    })

});
