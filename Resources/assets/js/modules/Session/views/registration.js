define([
  'app',
  'config',
  'Common/views/form',
  'tpl!../templates/registration.ejs'], function(App, Config, Form, registrationTemplate){

  return App.module('Session', function(Session, App, Backbone, Marionette, $, _){

    Session.RegistrationView = Form.ItemView.extend({
      template: registrationTemplate,
      className: 'auth-block registration-block',

      initialize: function(){
        this.baseUrl = Config.baseUrl;
        this.basePath = Config.basePath;
      },

      serializeData: function(){
        return {
          baseUrl: this.baseUrl,
          basePath: this.basePath
        };
      },

      modelEvents: {
        'registration:success' : 'registrationSuccess',
        'invalid' : 'formDataInvalid'
      },

      registrationSuccess: function(){
        this.$el.fadeOut();
      },

      onShow: function(){
        $('body').addClass('auth-page');
      },

      onDestroy: function(){
        $('body').removeClass('auth-page');
      }
    });

  });


});
