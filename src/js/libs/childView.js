define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    var $body = $('body');
    var $content = $('.content');
    var $childView = $('.child-view');

    return Backbone.View.extend({

        tagName: '',

        className: '',

        events: {

        },

        initialize: function() {
            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	}

    });

});