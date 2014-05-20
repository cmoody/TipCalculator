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
            'tap .navbtn': 'navSlide',
            'tap .backbtn': 'updateNavigation'
        },

        initialize: function() {
            // Trigger for updating title
            stateEvents.on("update:title", function(title) {
                this.$('.title').html(title);
            }, this);

            stateEvents.on("change:navigation", this.updateNavigation, this);

            stateEvents.on("change:navigation:secondary", function(title) {
                //this.$('.title').html(title);
                // Change secondary navigation
            }, this);

            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	},

        updateNavigation: function() {
            //this.$('.title').html(title);
            // Change .navbtn to < arrow
            // toggle .navbtn/.backbtn
        },

        // If open unfocus keyboard
        navSlide: function(e) {
            e.stopPropagation(); // Move to delegateEvents?
            e.preventDefault();

            $body.toggleClass('open');
        }

    });

});