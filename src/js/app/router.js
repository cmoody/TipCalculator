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
  var HeaderView = require('app/navigation/header/header');
  var SlideNavView = require('app/navigation/slideNav/slideNav');
  var CalculatorView = require('app/calculator/calculator');
  var HistoryView = require('app/history/history');
  var StatsView = require('app/stats/stats');
  var MapView = require('app/map/map');
  
  return Backbone.Router.extend({

    routes: {
		  '': 'calculator',
      '/': 'calculator',
      'history': 'history',
      'stats': 'stats',
      'map': 'map'
    },

    initialize: function() {
      this.addHeaderNav();
    },

    addHeaderNav: function() {
      var headerView = new HeaderView();
      var slideNavView = new SlideNavView();

      $body
        .prepend(headerView.$el)
        .prepend(slideNavView.$el);
    },

    calculator: function() {
      var calculatorView = new CalculatorView();

      ViewHandler.setCurrent(calculatorView, "Calculator");
    },

    history: function() {
      var historyView = new HistoryView();

      ViewHandler.setCurrent(historyView, "History");
    },

    stats: function() {
      var statsView = new StatsView();

      ViewHandler.setCurrent(statsView, "Stats");
    },

    map: function() {
      var mapView = new MapView();

      ViewHandler.setCurrent(mapView, "Map");
      mapView.render();
    }

  });

});