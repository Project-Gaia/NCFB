/*
   Author: Mark Sun
   Date: 11/15/2015
*/
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
        divTxtBoxFirstName: "#sign-up-first-name-txtbox-div",
        divTxtBoxMiddleName: "#sign-up-middle-name-txtbox-div",
        divTxtBoxLastName: "#sign-up-last-name-txtbox-div",
        divDoBDatePicker: "#sign-up-dob-datepicker-div",
        divEmergencyContact: "#sign-up-emergency-contact-div",
        divEmergencyContactPhone: "#sign-up-emergency-contact-phone-div",
        divSignUpAgreement: "#sign-up-terms-agreement-div",
        txtboxFirstName: "#sign-up-first-name-txtbox",
        txtboxMiddleName: "#sign-up-middle-name-txtbox",
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
          // Auto check the agree checkbox once user clicked I agree
          if (!$("#sign-up-terms-agreement").prop("checked"))
          {
            $("#sign-up-terms-agreement").prop("checked", true);
          }
        });

        $("#btn-disagree-terms").on("click", function(){
          // Auto uncheck the agree checkbox once user clicked I disagree
          // only if it was checked
          if ($("#sign-up-terms-agreement").prop("checked"))
          {
            $("#sign-up-terms-agreement").prop("checked", false);
          }
        });
      },

      BtnCreateOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        // TODO: DEBUG ONLY

        if(!this.OnCreateValidation()){
          VolunteerManager.VolunteerApp.PersonCreated = true;
          VolunteerManager.VolunteerApp.IndividualFinder.Controller.display();
          Backbone.history.navigate("individualFinder");
        }
      },

      BtnCancelOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      },

      OnCreateValidation: function(){
        // The following are required fields
        // First Name
        // Last Name
        // Date of Birth
        // Emergency Contact
        // Emergency Contact #
        var has_error = false;
        VolunteerManager.VolunteerApp.HasError = false;

        if (this.ui.txtboxFirstName.val() == "")
        {
          has_error = true;
          this.ui.divTxtBoxFirstName.addClass("has-error");
        }
        else{
            if (this.ui.divTxtBoxFirstName.hasClass("has-error"))
            {
                this.ui.divTxtBoxFirstName.removeClass("has-error");
            }
        }

        if (this.ui.txtboxLastName.val() == "")
        {
          has_error = true;
          this.ui.divTxtBoxLastName.addClass("has-error");
        }
        else{
            if (this.ui.divTxtBoxLastName.hasClass("has-error"))
            {
                this.ui.divTxtBoxLastName.removeClass("has-error");
            }
        }

        if (this.ui.datepicker.val() == "")
        {
          has_error = true;
          this.ui.divDoBDatePicker.addClass("has-error");
        }
        else{
            if (this.ui.divDoBDatePicker.hasClass("has-error"))
            {
                this.ui.divDoBDatePicker.removeClass("has-error");
            }
        }

        if (this.ui.txtboxEmergencyContact.val() == "")
        {
          has_error = true;
          this.ui.divEmergencyContact.addClass("has-error");
        }
        else{
            if (this.ui.divEmergencyContact.hasClass("has-error"))
            {
                this.ui.divEmergencyContact.removeClass("has-error");
            }
        }

        if (this.ui.txtboxEmergencyContactNumber.val() == "")
        {
          has_error = true;
          this.ui.divEmergencyContactPhone.addClass("has-error");
        }
        else{
            if (this.ui.divEmergencyContactPhone.hasClass("has-error"))
            {
                this.ui.divEmergencyContactPhone.removeClass("has-error");
            }
        }
        
        // this.ui.groupRadioBox.is(":checked"))
        if (!this.ui.checkboxAgreeTerms.is(":checked"))
        {
            has_error = true;
            this.ui.divSignUpAgreement.addClass("has-error")
        }
        else{
            if (this.ui.divSignUpAgreement.hasClass("has-error"))
            {
                this.ui.divSignUpAgreement.removeClass("has-error");
            }
        }
          
        return has_error;
      }

    })

});
