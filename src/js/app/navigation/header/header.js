define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var stateEvents = require('libs/stateEvents');

    // Template
    var tpl = require('text!app/navigation/header/tpl/header.html');
    var template = _.template(tpl);

    var $body = $('body');
    var $content = $('.content');
    var $childView = $('.child-view');

    var is_back = false;

    return Backbone.View.extend({

        className: 'header',

        events: {
            'tap .navbtn': 'navSlide',
            'tap .backbtn': 'back'
        },

        initialize: function() {
            // Trigger for updating title
            stateEvents.on("update:title", this.updateTitle, this);
            // Trigger for updating navigation menu and back btn
            stateEvents.on("change:navigation", this.updateNavigation, this);
            // Trigger for secondary navigation within section
            stateEvents.on("change:navigation:secondary", this.updateNavigationSecondary, this);

            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	},

        back: function() {
            stateEvents.trigger("change:navigation", true);
        },

        updateTitle: function(title) {
            this.$('.title').html(title);
        },

        updateNavigation: function(backbtn) {
            // Move to store state of change here
            // Dont use toggle but check state
            // Remove passing backbtn
            this.$('.button').toggle();

            if(backbtn) {
                $content
                    .css('transform', '');

                $childView
                    .css('transform', '');
            }
        },

        updateNavigationSecondary: function() {
            this.$('.secondary-nav').toggle(); // Toggle off on exit view
            // Let view update icon with class or have all in dom
            // Pass in trigger callbacks and context to run actions // callback set on this views context
            // For example slide menu callback that opens drawer and context of the view itself

            // Test with spring animation menu on map to add marker
        },

        // If open unfocus keyboard
        navSlide: function(e) {
            e.stopPropagation(); // Move to delegateEvents? // might be fixed after random href on navbtn
            e.preventDefault();

            $body.toggleClass('open');
        }

    });

});