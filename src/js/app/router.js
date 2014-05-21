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
  var FooterView = require('app/footer/footer');
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
      this.addFooterNav();
    },

    addHeaderNav: function() {
      var headerView = new HeaderView();
      var slideNavView = new SlideNavView();

      $body
        .prepend(headerView.$el)
        .prepend(slideNavView.$el);
    },

    addFooterNav: function() {
      var footerView = new FooterView();

      $body
        .append(footerView.$el);
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
    },

    map: function() {
      var mapView = new MapView();

      stateEvents.trigger("update:title", "Map");

      ViewHandler.setCurrent(mapView);
      mapView.render();
    }

  });

});