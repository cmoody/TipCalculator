// Turn this into default child view to extend from
define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');
    //var Gmap = require('libs/gmap');

    // Template
    var tpl = require('text!app/history/tpl/expenseDetails.html');
    var template = _.template(tpl);
    //var template = _.template($('#tpl').html());

    var $body = $('body');
    var $content = $('.content');
    var $childView = $('.child-view');

    return Backbone.View.extend({

        className: 'expense-details',

        events: {

        },

        initialize: function() {
            stateEvents.trigger("change:navigation", false);
            
            //this.render();
        },

    	render: function() {
            this.$el.html(template(this.model.toJSON()));

            //Gmap.init(this.$('#map_holder'));

            return this;
    	}

    });

});