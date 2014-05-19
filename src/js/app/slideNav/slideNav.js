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
    var $content = $('.content');
    var windowWidth = ($(window).width()) / 0.8;

    return Backbone.View.extend({

        tagName: 'nav',

        className: '',

        events: {
            'tap .list a': 'navSlide',
            'tap .nav-closer': 'navSlide',
            // 'drag .nav-closer': 'dragNav',
            // 'release .nav-closer': 'dragNav'
        },

        initialize: function() {
            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	},

        // Still pretty slow
        dragNav: function(e) {
            var total = windowWidth + e.gesture.deltaX;
            console.log(windowWidth);
            console.log(e.gesture.deltaX);
            console.log(total);

            if(total < windowWidth && total > 0) {
                $content.css('transform','translateX('+e.gesture.center.pageX+'px)');
            }

            if(e.gesture.eventType === 'release' && e.gesture.interimDirection === 'left') {
                $content.css('transform','');
                $body.toggleClass('open');
            }else {
                //reset?
            }
        },

        navSlide: function() {
            $body.toggleClass('open');
        },

    });

});