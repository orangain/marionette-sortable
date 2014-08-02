// Marionette.SortableCollectionView
//
// Copyright (c) 2014 orangain
// Distributed under MIT License
// https://github.com/orangain/marionette-sortable

(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['marionette', 'underscore'], factory);
  } else if (typeof exports !== 'undefined') {
    // Node/CommonJS
    var Marionette = require('marionette');
    var _ = require('underscore');
    factory(Marionette, _);
  } else {
    // Browser globals
    factory(root.Marionette, root._);
  }

}(this, function(Marionette, _) {

  Marionette.SortableBehavior = Marionette.Behavior.extend({

    events: {
      'sortupdate': 'onSortUpdate'
    },

    onSortUpdate: function(e, ui) {
      var childElement = ui.item;
      var newIndex = this.$el.children().index(childElement);
      var collection = this.view.collection;
      var model = collection.get(childElement.attr('data-model-cid'));
      // do not use silent to notify other obversers.
      collection.remove(model);
      collection.add(model, {at: newIndex});
    },

    onRender: function() {
      var options = _.clone(this.options);
      delete options.behaviorClass;
      delete options.html5sortable;

      this.$el.sortable(options); // options are passed to the sortable
    },

    onAddChild: function(view) {
      view.$el.attr('data-model-cid', view.model.cid);
      if (this.options.html5sortable) {
        this.$el.sortable('reload');
      }
    }

  });

  Marionette.SortableCollectionView = Marionette.CollectionView.extend({

    constructor: function(options) {
      _.extend(this, _.pick(options, ['sortableOptions']));

      // Add Sortable behavior using sortableOptions
      this.behaviors = this.behaviors || {};
      this.behaviors._Sortable = _.extend({
        behaviorClass: Marionette.SortableBehavior
      }, this.sortableOptions || {});

      Marionette.CollectionView.apply(this, arguments);
    }

  });

}));
