define(function(require) {
	"use strict";

	// Libs
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Template
    var tpl = require('text!app/history/tpl/expense.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'expense',

		initialize: function() {
			this.render();
		},

		render: function() {
			console.log(this.model);
			this.$el.html(template(this.model.toJSON()));
			
			return this;
		}
	});

});