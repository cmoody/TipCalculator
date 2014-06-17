define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');

    var style = [{"featureType":"landscape","stylers":[{"hue":"#FFA800"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#53FF00"},{"saturation":-73},{"lightness":40},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FBFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#00FFFD"},{"saturation":0},{"lightness":30},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00BFFF"},{"saturation":6},{"lightness":8},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#679714"},{"saturation":33.4},{"lightness":-25.4},{"gamma":1}]}]

    var gmap = {
        mapCenter: null,
        myMarker: null,
        userMap: null,

        init: function(domElement, mapCenter) {
            // Get either users current position or use center passed in 
            if(!mapCenter) {
                var mapCenter = new google.maps.LatLng(30.2500, -97.7500);
            }

            var mapOptions = {
                zoom: 16,
                center: mapCenter,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.userMap = new google.maps.Map(domElement.get(0), mapOptions);

            this.userMap.setOptions({
                styles: style
            });
        },

        addMarkers: function(expense) {
            var coordinates = expense.get('coordinates');
            var expenseLatLng = new google.maps.LatLng(coordinates.latitude, coordinates.longitude);

            var marker = new google.maps.Marker({
                position: expenseLatLng,
                map: this.userMap,
                title: "Hello World!"
            });
        },

        resize: function() {
            google.maps.event.trigger(this.userMap, "resize");
        },

        errors: function() {
            console.log("Error");
        }
    };

    return gmap;

});