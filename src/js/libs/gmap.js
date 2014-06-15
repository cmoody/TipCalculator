define(function (require) {

    "use strict";

    // Vendor
    var $ = require('jquery');
    var _ = require('underscore');
    //var api = require('libs/api');

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

            // if(mapCenter) {
            //     this.createMap(domElement, mapCenter);
            // }else{
            //     navigator.geolocation.getCurrentPosition(function(position) {
            //         this.createMap(domElement, mapCenter);
            //     }.bind(this), this.errors);
            // }

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

            this.addMyMarker();
        },

        createMap: function(domElement, mapCenter) {

        },

        addMarkers: function() {
            // api.getMarkers();
        },

        addMyMarker: function() {
            // Get geolocation
            navigator.geolocation.getCurrentPosition(function(position) {
                
                var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                this.myMarker = new google.maps.Marker({
                    position: myLatLng,
                    map: this.userMap,
                    title: 'test'
                });

            }.bind(this), this.errors);
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