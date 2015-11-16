/*
   Author: Mark Sun
   Date: 11/15/2015
*/
VolunteerManager.module("VolunteerApp.SignUp", function(SignUp
  , VolunteerManager, Backbone, Marionette, $, _){
    SignUp.Controller = {
      display: function(){
        var sign_up_view = new SignUp.Page();
        VolunteerManager.regions.main.show(sign_up_view);
      }
    }

    SignUp.Model = Backbone.Model.extend({
      defaults: {
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        EmergencyContact:"",

      }
    })
});
