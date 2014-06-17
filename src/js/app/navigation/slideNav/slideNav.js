define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    // Template
    var tpl = require('text!app/navigation/slideNav/tpl/index.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        className: 'slide-nav',

        events: {
            'tap .nav-closer': 'navSlide',
            'tap .list a': 'navSlide'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(template());

            return this;
        },

        navSlide: function() {
            $body.toggleClass('open');
        }

    });

});