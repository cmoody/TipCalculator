define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/stats/tpl/index.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'stats',

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			
			return this;
		}
	});

});