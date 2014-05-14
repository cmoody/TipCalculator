define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Expenses = require('app/models/expenses');

	// Template
    var tpl = require('text!app/history/tpl/index.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'history',

		initialize: function() {
			Expenses.Collection.fetch({reset:true});

			this.render();
		},

		render: function() {
			// Pass in to create a new expense view for each one
			Expenses.Collection.each(function(expense) {
				console.log(expense);
			}, this);

			this.$el.html(template());
			
			return this;
		}
	});

});