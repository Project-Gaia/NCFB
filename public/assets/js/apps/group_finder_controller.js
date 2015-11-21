/*
   Author: Mark Sun
   Date: 11/21/2015
*/
VolunteerManager.module("VolunteerApp.GroupFinder", function(GroupFinder
  , VolunteerManager, Backbone, Marionette, $, _){
    GroupFinder.Controller = {
      display: function(){
        var group_finder_view = new GroupFinder.Page();
        VolunteerManager.regions.main.show(group_finder_view);
      }
    }
});
