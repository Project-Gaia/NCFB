/*
   Author: Mark Sun
   Date: 11/15/2015
*/
VolunteerManager.module("VolunteerApp.CheckInSuccessful", function(CheckInSuccessful
  , VolunteerManager, Backbone, Marionette, $, _){
    CheckInSuccessful.Controller = {
      display: function(){
        var check_in_successful_view = new CheckInSuccessful.Page();
        VolunteerManager.regions.main.show(check_in_successful_view);
      }
    }

});
