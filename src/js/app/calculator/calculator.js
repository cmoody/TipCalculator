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
			'tap .notip': 'noTip',
			'tap .tip': 'submitTip'
		},

		percent: 10,

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());

			// this.$el.find('.box').velocity(
			// 	{
			// 		translateY: [0, 50],
			// 		translateX: [0, 50],
			// 		opacity: 1
			// 	}, 
			// 	{
			// 		duration: 1000, 
			// 		delay: 2000, 
			// 		easing: "easeInOutElastic",
			// 		loop: 4
			// 	}
			// );
			
			return this;
		},

		calc: function() {
			var bill = this.$el.find('.bill').val() || 0;
			var tip = (bill * this.percent);
			var total = (bill + total);

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
		}
	});

});