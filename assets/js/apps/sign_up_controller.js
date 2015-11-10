VolunteerManager.module("VolunteerApp.SignUp", function(SignUp
  , VolunteerManager, Backbone, Marionette, $, _){
    SignUp.Controller = {
      display: function(){
        var sign_up_view = new SignUp.Page();
        VolunteerManager.regions.main.show(sign_up_view);
      }
    }
});
