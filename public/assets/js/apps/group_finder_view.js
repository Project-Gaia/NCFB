/*
   Author: Mark Sun
   Date: 11/21/2015
*/
VolunteerManager.module("VolunteerApp.GroupFinder", function(GroupFinder
  , VolunteerManager, Backbone, Marionette, $, _){
    GroupFinder.Page = Marionette.ItemView.extend({
      template: "#group-finder-template",

      ui: {
        txtboxFirstName: "#group-finder-first-name-txtbox",
        txtboxLastName: "#group-finder-last-name-txtbox",
        datepicker: "#group-finder-dob-datepicker",
        btnFind: "#group-finder-find-btn",
        btnCheckIn: "#group-finder-check-in-btn",
        btnStartOver: "#group-finder-start-over-btn"
      },

      events: {
        "click @ui.btnFind": "BtnFindOnClick",
        "click @ui.btnStartOver": "BtnStartOverOnClick",
        "click @ui.btnCheckIn": "BtnCheckIn"
      },

      onRender: function(){
        this.ui.datepicker.datepicker();
      },

      BtnFindOnClick: function(){
        // TODO: Implement find once Database is hooked up
      },

      BtnStartOverOnClick: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      },

      BtnCheckIn: function(e){
        e.preventDefault();
        e.stopPropagation();
        VolunteerManager.VolunteerApp.CheckInSuccessful.Controller.display();
        Backbone.history.navigate("checkInSuccessful");
      }

    })

});
