require.config({
	paths: {
	 	'jquery': 'vendor/jquery/dist/jquery.min',
	    'backbone': 'vendor/backbone/backbone',
	    'underscore': 'vendor/underscore/underscore',
	    'hammerjs': 'vendor/jquery-hammerjs/jquery.hammer-full.min',
	    'velocity': 'vendor/velocity/jquery.velocity.min',
        'text': 'vendor/requirejs-text/text',
        'backboneLocalstorage': 'vendor/backbone.localStorage/backbone.localStorage-min',
        'd3': 'vendor/d3/d3.min',
        'iscroll': 'vendor/iscroll/build/iscroll',
	    'app': 'app',
        'libs': 'libs'
    },
	shim: {
		'velocity': ['jquery'],
		'iscroll': {
			exports: 'IScroll'
		}
	}
});

require([
	'app/router',
	'velocity',
	'libs/delegateEvents'
], function(Router) {

	var appRouter = new Router();
	Backbone.history.start();

});