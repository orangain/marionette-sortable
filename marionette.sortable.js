var Sortable = Marionette.Behavior.extend({

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

/** Sortable Collection View */
Marionette.SortableCollectionView = Marionette.CollectionView.extend({

  constructor: function(options) {
    _.extend(this, _.pick(options, ['sortableOptions']));

    // Add Sortable behavior using sortableOptions
    this.behaviors = this.behaviors || {};
    this.behaviors._Sortable = _.extend({
      behaviorClass: Sortable
    }, this.sortableOptions || {});

    Marionette.CollectionView.apply(this, arguments);
  }

});
