define([
    'underscore',
    'tpl!diamanteautomation/js/app/templates/automation-template.ejs',
    'oroui/js/app/views/base/view'
],function (_, AutomationTemplate, BaseView) {
    'use strict';

    var AutomationView = BaseView.extend({
        autoRender: true,
        className: 'container-fluid',
        template : AutomationTemplate,

        regions: {
            'automation-conditions': '#automation-conditions',
            'automation-actions': '#automation-actions'
        },

        initialize: function(options){
            this.options = _.omit(options, 'el', 'model');
        },

        getTemplateData: function() {
            var data = BaseView.prototype.getTemplateData.call(this);
            return _.extend(data, this.options);
        }
    });

    return AutomationView;
});