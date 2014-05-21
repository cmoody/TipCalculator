define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    // Template
    var tpl = require('text!app/footer/tpl/footer.html');
    var template = _.template(tpl);

    return Backbone.View.extend({

        className: 'footer',

        events: {
            'tap .menu': 'openMenu'
        },

        initialize: function() {
            this.render();
        },

    	render: function() {
            this.$el.html(template());

            return this;
    	},

        openMenu: function() {
            this.$el.toggleClass('open');
        }

    });

});