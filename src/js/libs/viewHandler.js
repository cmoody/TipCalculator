define(function(require) {

	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');

	// Libs
	var stateEvents = require('libs/stateEvents');

	// Elements
	var $content = $(".content");

	// Other
	var currentView;

 	// Adds Close to Backbone Views
	Backbone.View.prototype.close = function(){
		this.remove();
		this.unbind();
		if (this.onClose){
		  this.onClose();
		}
	};

  	var ViewHandler = {
  		setCurrent: function(view, title) {
  			if(title) {
  				stateEvents.trigger("update:title", title);
  			}

			if (currentView){
				currentView.close();
			}

		  	currentView = view;

		  	$content.html(currentView.$el);
		}
	}

	return ViewHandler;

});
