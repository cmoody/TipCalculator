define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Libs
	var Gmap = require('libs/gmap');

	// Model
	var Expenses = require('app/models/expenses');

	// Template
    var template = _.template($('#tpl').html());
	
	return Backbone.View.extend({
		className: 'map',

		initialize: function() {
			Expenses.Collection.fetch({reset:true});

			this.$el.html(template());
		},

		render: function() {
			Gmap.init(this.$('#map_holder'));

			Expenses.Collection.each(function(expense) {
				
				Gmap.addMarkers(expense);

			}, this);
			
			return this;
		}
	});

});