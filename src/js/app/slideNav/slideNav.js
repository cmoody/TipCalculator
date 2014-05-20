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
    //var $header = $('.bar-nav'); // Wont work since isnt in the DOM yet // Maybe move back into header
    var windowWidth = ($(window).width()) / 0.8;

    return Backbone.View.extend({

        tagName: 'nav',

        className: '',

        events: {
            'tap .list a': 'navSlide',
            'tap .nav-closer': 'navSlide',
            'drag .nav-closer': 'dragNav',
            'release .nav-closer': 'dragNav'
        },

        initialize: function() {
            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	},

        dragNav: function(e) {
            var total = windowWidth + e.gesture.deltaX;

            if(total < windowWidth && total > 0) {
                $content.css('transform','translateX('+e.gesture.center.pageX+'px)'); // This might be slow due to letting the browser handle animation update
                //$header.css('transform','translateX('+e.gesture.center.pageX+'px)');
            }

            if(e.gesture.eventType === 'release' && e.gesture.interimDirection === 'left') {
                $content.css('transform','');
                //$header.css('transform','');
                $body.toggleClass('open');
            }else if(e.gesture.eventType === 'release' && e.gesture.interimDirection === 'right'){
                $content.css('transform','');
            }
        },

        navSlide: function() {
            $body.toggleClass('open');
        }

    });

});