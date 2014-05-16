define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Expenses = require('app/models/expenses');

	// SubViews
	var ExpenseView = require('app/history/expense');

	// Template
    // var tpl = require('text!app/history/tpl/index.html');
    // var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'history',

		initialize: function() {
			Expenses.Collection.fetch({reset:true});

			this.render();
		},

		render: function() {
			var $view = this.$el;
			if(Expenses.Collection.length === 0) {

			}

			//this.$el.html(template());

			// Using this method allows for events specific to each row
			Expenses.Collection.each(function(expense) {
				
				var expenseView = new ExpenseView({model: expense});
				$view.append(expenseView.$el);

			}, this);

			// Alternative
			// var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
			// _.template(list, {people: ['moe', 'curly', 'larry']});
			
			return this;
		}
	});

});