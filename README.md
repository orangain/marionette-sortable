Marionette.SortableCollectionView
=================================

A sortable Marionette.CollectionView powered by [jQuery UI Sortable](http://jqueryui.com/sortable/) or [HTML5 Sortable](https://github.com/voidberg/html5sortable).

Requirements
------------

- [Marionette.js](http://marionettejs.com/)
- [jQuery UI Sortable](http://jqueryui.com/sortable/) or [HTML5 Sortable](https://github.com/voidberg/html5sortable).

Usage
-----

Load `marionette.sortable.js`.

```html
<script src="marionette.sortable.js"></script>
```

Extend your CollectionView from `Marionette.SortableCollectionView`.

```js
var YourCollectionView = Marionette.SortableCollectionView.extend({

  ...

  // Optional object to be passed to the $.sortable()'s argument.
  sortableOptions: {
    html5sortable: true // Required when using HTML5 Sortable.
  }

});
```

### As a Behavior (mixin)

Marionette.SortableCollectionView also provides `Sortable` Behavior.
This enable you to add `Sortable` behavior to any `Marionette.CollectionView`s without inheriting `Marionette.SortableCollectionView`.

```js
var YourCollectionView = Marionette.CollectionView.extend({

  ...

  behaviors: {
    Sortable: {
      behaviorClass: Sortable,
      html5sortable: true // Required when using HTML5 Sortable.
    }
  }

});
```
