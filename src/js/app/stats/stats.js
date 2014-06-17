define(function(require) {
	"use strict";

	// Vendor
	var $ = require('jquery');
	var Backbone = require('backbone');
	var d3 = require('d3');

	// Model
	var Expenses = require('app/models/expenses');

	// Template
    var tpl = require('text!app/stats/tpl/index.html');
    var template = _.template(tpl);
	
	return Backbone.View.extend({
		className: 'stats',

		initialize: function() {
			Expenses.Collection.fetch({reset:true});

			this.render();
		},

		// Add average % tip
		render: function() {
			var totalJSON = Expenses.Collection.getTotals();
			this.$el.html(template(totalJSON));

			if(totalJSON.bill > 0) {
				this.pieChart(totalJSON);
			}
			
			return this;
		},

		pieChart: function(expenses) {
			var w = 200;                        //width
		    var h = 200;                        //height
		    var r = Math.min(w, h) / 2;   		//radius
		    var color = d3.scale.ordinal().range(["#ff0", "rgb(0, 178, 89)"]);
		    var data = [{"value": expenses.tip},{"value": expenses.bill}];

		    var vis = d3.select(this.$('#pieChart')[0])
		        .append("svg:svg")              //create the SVG element inside the <body>
		        .data([data])                   //associate our data with the document
		        .attr("width", w)           	//set the width and height of our visualization (these will be attributes of the <svg> tag
		        .attr("height", h)
		        .append("svg:g")                //make a group to hold our pie chart
		        .attr("transform", "translate(" + r + "," + r + ")");    //move the center of the pie chart from 0, 0 to radius, radius

		    var arc = d3.svg.arc()   //this will create <path> elements for us using arc data
		        .outerRadius(r)
		        .innerRadius(r - 40);

		    var pie = d3.layout.pie()           			//this will create arc data for us given a list of values
		    	.sort(null)
		        .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

		    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
		        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
		        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
		        .append("svg:g")                    //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
		        .attr("class", "slice");            //allow us to style things in the slices (like text)

	        arcs.append("svg:path")
	            .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
	            .transition()
	            .duration(2000)
	            .attrTween("d", tweenPie);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

	        function tweenPie(b) {
	        	var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	        	return function(t) { return arc(i(t)); };
	        }
		}
	});

});