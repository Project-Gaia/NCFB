var VolunteerManager = new Marionette.Application();

VolunteerManager.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      main: "#main-region"
    }
  });

  VolunteerManager.regions = new RegionContainer();
})

VolunteerManager.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

VolunteerManager.getCurrentRoute = function(){
  return Backbone.history.fragment
};


VolunteerManager.on("start", function(){

  if (Backbone.history){
    Backbone.history.start();
  }

  if(this.getCurrentRoute() === ""){
    Backbone.history.navigate("welcomeScreen");
    VolunteerManager.VolunteerApp.WelcomeScreen.Controller.display();
  }
})
