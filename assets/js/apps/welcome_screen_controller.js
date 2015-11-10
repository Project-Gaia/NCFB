VolunteerManager.module("VolunteerApp.WelcomeScreen", function(WelcomeScreen
  , VolunteerManager, Backbone, Marionette, $, _){
    WelcomeScreen.Controller = {
      display: function(){
        var welcome_screen_view = new WelcomeScreen.Page();
        VolunteerManager.regions.main.show(welcome_screen_view);
      }
    }

});
