define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    var maps = require('async!http://maps.google.com/maps/api/js?key=AIzaSyCJ7xhp7KwIi_rdp8WTVxja2r5KNvA1uK8&sensor=true');

    var style = [{"featureType":"landscape","stylers":[{"hue":"#FFA800"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#53FF00"},{"saturation":-73},{"lightness":40},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FBFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#00FFFD"},{"saturation":0},{"lightness":30},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00BFFF"},{"saturation":6},{"lightness":8},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#679714"},{"saturation":33.4},{"lightness":-25.4},{"gamma":1}]}]

    var gmap = {
        mapCenter: null,
        myMarker: null,
        userMap: null,

        init: function(domElement) {
            var myLatLng = new google.maps.LatLng(30.2500, -97.7500);

            var mapOptions = {
                zoom: 16,
                center: myLatLng,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.userMap = new google.maps.Map(domElement.get(0), mapOptions);
            this.userMap.setOptions({
                styles: style
            });
        },

        resize: function() {
            google.maps.event.trigger(this.userMap, "resize");
        }
    };

    return gmap;

});