define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');
	var Expenses = require('app/models/expenses');

	// Template
    var tpl = require('text!app/calculator/tpl/index.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'calculator',

		events: {
			'keyup .bill': 'calc',
			'tap .percent': 'setPercent',
			'tap .btn-notip': 'noTip',
			'tap .btn-tip': 'submitTip'
		},

		// Default percent
		percent: 0.10,

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			
			return this;
		},

		calc: function() {
			var bill = this.$('.bill').val() || 0;
			var tip = (bill * parseFloat(this.percent)).toFixed(2);;
			var total = (parseFloat(bill) + parseFloat(tip)).toFixed(2);;

			this.$('.tip').val(tip);
			this.$('.total').val(total);
		},

		setPercent: function(e) {
			var elem = $(e.target);

			this.$('.active').removeClass('active');
			elem.addClass('active');

			this.percent = elem.data('percent');

			this.calc();
		},

		noTip: function() {
			this.$('.tip').val(0);
			this.submitTip();
		},

		submitTip: function() {
			var $description = this.$('.description');
			var $bill = this.$('.bill');
			var $tip = this.$('.tip');
			var $total = this.$('.total');
			var coordinates;

			if(!$description.val() || !$bill.val()) {
				return;
			}

			this.$('.dollar')
				.velocity({ top: '0' }, { duration: 2000, easing: "easeInOutElastic" });

			navigator.geolocation.getCurrentPosition(function(position) {
				//console.log(position)
				Expenses.Collection.create({
					description: $description.val(),
					bill: $bill.val(),
					tip: $tip.val(),
					total: $total.val(),
					date: new Date(),
					coordinates: {
						latitude: position.coords.latitude, 
						longitude: position.coords.longitude
					}
				});

				setTimeout(function() {
					$description.val('');
					$bill.val('');
					$tip.val('');
					$total.val('');
				}, 2500);

				this.$('.dollar')
					.velocity("reverse", {delay: 1000, duration: 2000});
			}.bind(this));
		}
	});

});