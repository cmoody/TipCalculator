define(function (require) {

    "use strict";

    var $ = require('jquery');
    var Backbone = require('backbone');
    var Store = require('backboneLocalstorage');

    var Expense = Backbone.Model.extend({});

    var ExpensesCollection = Backbone.Collection.extend({

        model: Expense,

        localStorage: new Store('expenses'),

        getTotals: function() {
            var bill = 0;
            var tip = 0;
            var total = 0;

            _(this.each(function(expense) {
                bill += parseFloat(expense.get('bill'));
                tip += parseFloat(expense.get('tip'));
                total += parseFloat(expense.get('total'));
            }));

            return {
                bill: parseFloat(bill).toFixed(2),
                tip: parseFloat(tip).toFixed(2),
                total: parseFloat(total).toFixed(2)
            };
        }

    });

    return {
        Model: Expense,
        Collection: new ExpensesCollection()
    };

});