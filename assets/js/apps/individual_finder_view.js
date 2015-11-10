VolunteerManager.module("VolunteerApp.IndividualFinder", function(IndividualFinder
  , VolunteerManager, Backbone, Marionette, $, _){
    IndividualFinder.Page = Marionette.ItemView.extend({
      template: "#individual-finder-template",

      ui: {
        txtboxFirstName: "#individual-finder-first-name-txtbox",
        txtboxLastName: "#individual-finder-last-name-txtbox",
        datepicker: "#individual-finder-dob-datepicker",
        btnFind: "#individual-finder-find-btn",
        btnCheckIn: "#individual-finder-check-in-btn",
        btnStartOver: "#individual-finder-start-over-btn"
      },

      events: {
        "click @ui.btnFind": "BtnFindOnClick",
        "click @ui.btnStartOver": "BtnStartOverOnClick"
      },

      onRender: function(){
        this.ui.datepicker.datepicker();
      },

      BtnFindOnClick: function(){
        
      },

      BtnStartOverOnClick: function(){
        VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
        Backbone.history.navigate("welcomeScreen");
      }

    })

});
