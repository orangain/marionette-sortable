Marionette Sortable
===================

A sortable Marionette.CollectionView powered by [jQuery UI Sortable](http://jqueryui.com/sortable/) or [HTML5 Sortable](https://github.com/voidberg/html5sortable).

Demo
----

- [CollectionView with jQuery UI Sortable](http://orangain.github.io/marionette-sortable/sample/jquery-ui-sortable/)
  * [Source](https://github.com/orangain/marionette-sortable/tree/master/sample/jquery-ui-sortable)
- [CollectionView with HTML5 Sortable](http://orangain.github.io/marionette-sortable/sample/html5-sortable)
  * [Source](https://github.com/orangain/marionette-sortable/tree/master/sample/html5-sortable)
- [CompositeView with jQuery UI Sortable](http://orangain.github.io/marionette-sortable/sample/todomvc/)
  * [Source](https://github.com/orangain/marionette-sortable/tree/master/sample/todomvc)

Requirements
------------

- [Marionette.js](http://marionettejs.com/)
- [jQuery UI Sortable](http://jqueryui.com/sortable/) or [HTML5 Sortable](https://github.com/voidberg/html5sortable).

Usage
-----

Load `marionette-sortable.js` and other dependencies.

```html
<script src="marionette-sortable.js"></script>
```

Extend your CollectionView from `Marionette.SortableCollectionView`.
Note that `html5sortable: true` is required when using HTML5 Sortable.

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

Marionette Sortable also provides `Marionette.SortableBehavior`.
This enable you to make sortable any `Marionette.CollectionView`s without inheriting `Marionette.SortableCollectionView`.
Note that `html5sortable: true` is required when using HTML5 Sortable.

```js
var YourCollectionView = Marionette.CollectionView.extend({

  ...

  behaviors: {
    Sortable: {
      behaviorClass: Marionette.SortableBehavior,
      html5sortable: true // Required when using HTML5 Sortable.
    }
  }

});
```
