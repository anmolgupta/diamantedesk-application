define([
  'app',
  'backbone',
  './models/session',
  './routers/session'], function(App, Backbone, Session){

  var routes = Session.Router.prototype.appRoutes;

  App.on('before:start',function(){
    Session.start();
    App.session = new Session.SessionModel();
    App.session.getAuth().fail(function(){
      App.on('history:start', function(){
        var path = App.getCurrentRoute();
        if(!_.has(routes, path)){
          App.trigger('session:login', {return_path: path});
        }
      });
    }).done(function(){
      App.trigger('session:login:success');
    });
  });

  App.on('session:login:success', function(){
    if(App.session.return_path){
      App.navigate(App.session.return_path, {trigger: true});
      delete App.session.return_path;
    }
  });

});