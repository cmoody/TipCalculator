define(function (require) {

    "use strict";

    var $ = require('jquery');
    var Backbone = require('backbone');
    var Store = require('backboneLocalstorage');

    var Expense = Backbone.Model.extend({});

    var ExpensesCollection = Backbone.Collection.extend({

        model: Expense,

        localStorage: new Store('expenses')

    });

    return {
        Model: Expense,
        Collection: ExpensesCollection
    };

});