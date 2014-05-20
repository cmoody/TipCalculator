require.config({
	paths: {
	 	'jquery': 'vendor/jquery/dist/jquery.min',
	    'backbone': 'vendor/backbone/backbone',
	    'underscore': 'vendor/underscore/underscore',
	    'hammerjs': 'vendor/jquery-hammerjs/jquery.hammer-full.min',
	    'velocity': 'vendor/velocity/jquery.velocity.min',
        'text': 'vendor/requirejs-text/text',
        'async': 'vendor/async',
        'backboneLocalstorage': 'vendor/backbone.localStorage/backbone.localStorage-min',
        'd3': 'vendor/d3/d3.min',
        'google': 'http://maps.google.com/maps/api/js?key=AIzaSyCJ7xhp7KwIi_rdp8WTVxja2r5KNvA1uK8&sensor=true',
	    'app': 'app',
        'libs': 'libs'
    },
	shim: {
		'velocity': ['jquery']
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