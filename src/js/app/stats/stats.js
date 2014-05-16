define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Expenses = require('app/models/expenses');

	// Template
    var tpl = require('text!app/stats/tpl/index.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'stats',

		initialize: function() {
			Expenses.Collection.fetch({reset:true});

			this.render();
		},

		render: function() {
			// Build d3 graph
			console.log(Expenses.Collection.getTotals());

			this.$el.html(template());
			
			return this;
		}
	});

});