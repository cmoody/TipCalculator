define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var currentView;

	// Child Views
	var ExpenseDetailsView = require('app/history/expenseDetails');

	// Template
    var tpl = require('text!app/history/tpl/expense.html');
    var template = _.template(tpl);
	
	var $content = $('.content');
    var $childView = $('.child-view');

	return Backbone.View.extend({

		 tagName: 'li',

		className: 'expense',

		events: {
			'tap .details-btn': 'childView'
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template(this.model.toJSON()));
			
			return this;
		},

		// Add as part of default for any view
		childViewHandler: function(view) {
			if (currentView){
				currentView.close();
			}

		  	currentView = view;

		  	$content
		  		.css('transform', 'translateX(-100%)');

		  	$childView
		  		.html(currentView.$el)
		  		.css('transform', 'translateX(0%)');
		},

		childView: function() {
			var expenseDetailsView = new ExpenseDetailsView({model: this.model});

			this.childViewHandler(expenseDetailsView);
			expenseDetailsView.render();
		}
		
	});

});