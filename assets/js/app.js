var VolunteerManager = new Marionette.Application();

VolunteerManager.StaticView = Marionette.ItemView.extend({
  template: "#welcome-screen-template",

  ui: {
    checkIn: "#welcome-check-in-btn",
    checkOut: "#welcome-check-out-btn"
  },

  events: {
    "click @ui.checkIn": "CheckInOnClick",
    "click @ui.checkOut": "CheckOutOnClick"
  },

  CheckInOnClick: function(e){
    e.preventDefault();
    e.stopPropagation();
    VolunteerManager.VolunteerApp.ApplicableOptions.Controller.display();
  },

  CheckOutOnClick: function(){
    console.log("Check-out clicked!");
  }

})

VolunteerManager.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      main: "#main-region"
    }
  });

  VolunteerManager.regions = new RegionContainer();
})

VolunteerManager.on("start", function(){
  var staticView = new VolunteerManager.StaticView();

  VolunteerManager.regions.main.show(staticView);
})
