define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/header/tpl/header.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        className: 'header',

        events: {
            'tap .navbtn': 'navSlide'
        },

        initialize: function() {
            // Trigger for updating title
            stateEvents.on("update:title", function(title) {
                this.$('.title').html(title);
            }, this);

            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	},
        navSlide: function() {
            $body.toggleClass('open');
        },

    });

});