define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    // var Parse = require('');

    var geo = {
        getCurrentPosition: function() {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
            }, function() { console.log("Error"); });
        }
    };

    return geo;

});