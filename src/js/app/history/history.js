define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Expenses = require('app/models/expenses');
	var IScroll = require('iscroll');

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
			this.$el.html(template());

			var $view = this.$('.list');

			if(Expenses.Collection.length === 0) {
				$view.html("<li>No Expenses</li>");
			}

			// Using this method allows for events specific to each row
			Expenses.Collection.each(function(expense) {
				
				var expenseView = new ExpenseView({model: expense});
				$view.append(expenseView.$el);

			}, this);

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