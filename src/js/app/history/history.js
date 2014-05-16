define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Expenses = require('app/models/expenses');

	// SubViews
	var ExpenseView = require('app/history/expense');

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
			var $view = this.$el;

			this.$el.html(template());

			Expenses.Collection.each(function(expense) {
				
				var expenseView = new ExpenseView({model: expense});
				$view.append(expenseView.$el);

			}, this);
			
			return this;
		}
	});

});