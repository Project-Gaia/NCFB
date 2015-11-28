/********************************
* Author: Sai N Muppa
* Date: 11/27/2015
********************************/
define(["app"], function(VolunteerManager){
  VolunteerManager.module("VolunteerApp", function(VolunteerApp, VolunteerManager, Backbone, Marionette, $, _){
    VolunteerApp.startWithParent = false;

    VolunteerApp.onStart = function(){
      console.log("starting VolunteerApp");
    };

    VolunteerApp.onStop = function(){
      console.log("stopping VolunteerApp");
    };
  });

  return VolunteerManager.VolunteerApp;
});