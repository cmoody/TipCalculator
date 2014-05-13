define(function(require) {

  	"use strict";

  	var $ = require('jquery');
  	var Backbone = require('backbone');
  	var $content = $(".content");
  	var currentView;

	Backbone.View.prototype.close = function(){
		this.remove();
		this.unbind();
		if (this.onClose){
		  this.onClose();
		}
	};

	// Maybe setup to remove if no transitions needed
	Backbone.View.prototype.onEnter = function() {

	};

	Backbone.View.prototype.onExit = function() {
		// this.pageTransition.out
	};

	Backbone.View.prototype.pageTransition = {
      'in': '',
      'out': '',
      'inReverse': '',
      'outReverse': ''
    };

  	var ViewHandler = {
		//http://stackoverflow.com/questions/17634769/page-transitions-with-requirejs-and-backbone-js
  		// Maybe use above for transitions to childviews only
  		// then its all based on triggers and no need to update url and remove parentview since will be returning
  		// Only handles one level deep still causes url update for link within
  		setCurrent: function(view) {
  			// Call property on view for in/out
  			// currentView.onExit then on complete close
  			// view.onEnter
  			// Look into watching css animation start/stop
  			// Maybe test velocityjs for transitions

  			// Check if next view is same as previous view and use inReverse & outReverse?
			if (currentView){
				currentView.close();
			}

		  	currentView = view;

		  	$content.html(currentView.$el);

		  	// Maybe pass in event.target and check if has data-attr="back"

		  	// Need to check back vs forward?

		  	// WORKFLOW
		  	// add class to position offscreen
		  	// insert into dom
		  	// use velocityjs to transition
		  	// On complete for currentView call close
		  	// then make view the currentView
		}
	}

	return ViewHandler;

});