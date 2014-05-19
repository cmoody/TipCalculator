define(function(require) {

  "use strict";

  // Libs
  var $ = require('jquery');
  var Backbone = require('backbone');
  var ViewHandler = require('libs/viewHandler');
  var stateEvents = require('libs/stateEvents');

  // Main Container
  var $body = $("body");
  var $content = $(".content");
  
  // Collections

  // Views
  var HeaderView = require('app/header/header');
  var SlideNavView = require('app/slideNav/slideNav');
  var CalculatorView = require('app/calculator/calculator');
  var HistoryView = require('app/history/history');
  var StatsView = require('app/stats/stats');
  
  return Backbone.Router.extend({

    routes: {
		  '': 'calculator',
      '/': 'calculator',
      'history': 'history',
      'stats': 'stats'
    },

    initialize: function() {
      this.addHeaderNav();
    },

    addHeaderNav: function() {
      var headerView = new HeaderView();
      var slideNavView = new SlideNavView();

      $body
        .prepend(slideNavView.$el)
        .prepend(headerView.$el);
    },

    calculator: function() {
      var calculatorView = new CalculatorView();

      stateEvents.trigger("update:title", "Calculator");

      ViewHandler.setCurrent(calculatorView);
    },

    history: function() {
      var historyView = new HistoryView();

      stateEvents.trigger("update:title", "History");

      ViewHandler.setCurrent(historyView);
    },

    stats: function() {
      var statsView = new StatsView();

      stateEvents.trigger("update:title", "Stats");

      ViewHandler.setCurrent(statsView);
    }

  });

});