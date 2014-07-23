define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');
	//var IScroll = require('iscroll');

	// Model
	var Expenses = require('app/models/expenses');

	// SubViews
	var ExpenseView = require('app/history/expense');

	// Template
    var tpl = require('text!app/history/tpl/index.html');
    var template = _.template(tpl);

    var $header = $('.header');
	
	return Backbone.View.extend({
		className: 'history',

		initialize: function() {
			Expenses.Collection.fetch({reset:true});

			this.render();
		},

		render: function() {
			var expenseViews = document.createDocumentFragment();
			this.$el.html(template());

			var $view = this.$('.list');

			if(Expenses.Collection.length === 0) {
				$view.html("<li>No Expenses</li>");
			}

			// Using this method allows for events specific to each row
			// Order by most recent date
			Expenses.Collection.each(function(expense) {
				
				var expenseView = new ExpenseView({model: expense});
				expenseViews.appendChild(expenseView.render().el);
				//$view.append(expenseView.$el);

			}, this);

			$view.html(expenseViews).find('.expense')
				.velocity("transition.perspectiveDownIn", { stagger: 250 });

			// Alternative
			// var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
			// _.template(list, {people: ['moe', 'curly', 'larry']});

			// setTimeout(function(){
		 //        this.viewScroll = new IScroll('#iscrollable', {
		 //          probeType: 3,
		 //          mouseWheel: true
		 //        });

		 //        this.viewScroll.on('scrollCancel', this.updatePosition.bind(this));
		 //        this.viewScroll.on('beforeScrollStart', this.updatePosition.bind(this));
		 //        this.viewScroll.on('scrollStart', this.updatePosition.bind(this));
		 //        this.viewScroll.on('scroll', this.updatePosition.bind(this));
		 //        this.viewScroll.on('scrollEnd', this.updatePosition.bind(this));
			// }.bind(this), 200);

			return this;
		},

		// Direction is always 0?
		// I think this is for bottom menu not top
		updatePosition: function() {
			var direction = 0;
		    direction = this.viewScroll.yLast > this.viewScroll.y && this.viewScroll.y < 0 ? 1 : direction;
		    direction = this.viewScroll.yLast < this.viewScroll.y && this.viewScroll.y > this.viewScroll.maxScrollY ? -1 : direction;
		    this.viewScroll.yLast = this.viewScroll.y;

		    console.log(direction);
		}
	});

});