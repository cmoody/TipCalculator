define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Gmap = require('libs/gmap');
	var stateEvents = require('libs/stateEvents');

	// Template
    var template = _.template($('#tpl').html());
	
	return Backbone.View.extend({
		className: 'map',

		initialize: function() {
			stateEvents.trigger("change:navigation:secondary");
			// Destroy on route change?

			this.$el.html(template());
		},

		render: function() {
			Gmap.init(this.$('#map_holder'));
			
			return this;
		}
	});

});