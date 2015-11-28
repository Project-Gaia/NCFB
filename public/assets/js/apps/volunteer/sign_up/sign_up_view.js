/*************************
* Author: Mark Sun
* Date: 11/15/2015
* Co-Author: Sai N Muppa
* Date: 11/27/2015
*************************/
define(["app",
        "tpl!apps/volunteer/sign_up/templates/modal.tpl",
        "tpl!apps/volunteer/sign_up/templates/sign_up.tpl",
		"backbone.modal"],
		function(VolunteerManager, modalTpl, signUpTpl){
			VolunteerManager.module("VolunteerApp.SignUp.View", function(View, VolunteerManager, Backbone, Marionette, $, _){
			
			View.Page = Marionette.ItemView.extend({
			  template: signUpTpl,

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
				// Define our modal view class for the terms
				var Modal = Backbone.Modal.extend({
				  template: modalTpl,
				  cancelEl: '#btn-disagree-terms',
				  submitEl: '#btn-agree-terms'
				});
				
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
				VolunteerManager.trigger("individualfinder:display");
			  },

			  BtnCancelOnClick: function(e){
				e.preventDefault();
				e.stopPropagation();
				VolunteerManager.trigger("welcome:display");
			  }
			  
			});
		});
		
		return VolunteerManager.VolunteerApp.SignUp.View;
	});
