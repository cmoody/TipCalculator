define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    // Template
    var tpl = require('text!app/slideNav/tpl/index.html');
    var template = _.template(tpl);

    var $body = $('body');

    return Backbone.View.extend({

        tagName: 'nav',

        className: '',

        events: {
            'tap .list a': 'navSlide',
            'tap .nav-closer': 'navSlide'
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
        },

    });

});