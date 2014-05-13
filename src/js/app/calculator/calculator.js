define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

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

		percent: 0.10,

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			
			return this;
		},

		calc: function() {
			var bill = this.$el.find('.bill').val() || 0;
			var tip = (bill * parseFloat(this.percent)).toFixed(2);;
			var total = (parseFloat(bill) + parseFloat(tip)).toFixed(2);;

			this.$el.find('.tip').val(tip);
			this.$el.find('.total').val(total);
		},

		setPercent: function(e) {
			var elem = $(e.target);

			this.$el.find('.active').removeClass('active');
			elem.addClass('active');

			this.percent = elem.data('percent');

			this.calc();
		},

		noTip: function() {

		},

		submitTip: function() {
			// what to do on submit?
			this.$el.find('.dollar')
				.velocity(
					{
						top: '0',
						opacity: 1
					}, 
					{
						duration: 2000,
						easing: "easeInOutElastic",

					}
				).velocity("reverse", {delay: 1000, duration: 2000});
		}
	});

});