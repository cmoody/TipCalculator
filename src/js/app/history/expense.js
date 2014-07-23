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
			var jsonData = this.model.toJSON();
			var border;

			this.$el.html(template(jsonData));

			switch(jsonData.percent) {
				case 0.10:
                    border = "ten";
                    break;
                case 0.15:
                    border = "fifteen";
                    break;
                case '0.20':
                    border = "twenty";
                    break;
                case 0:
                    border = "notip";
                    break;
			}
			
			this.$el.addClass(border);

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