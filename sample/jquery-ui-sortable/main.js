// Model and Collection
var Fruit = Backbone.Model.extend({
});

var Fruits = Backbone.Collection.extend({
  model: Fruit
});

// Views
var FruitView = Backbone.Marionette.ItemView.extend({
  tagName: 'li',
  template: '#fruit_template'
});

var FruitsView = Backbone.Marionette.SortableCollectionView.extend({
  childView: FruitView
});

// Run

var fruits = new Fruits();
fruits.add(new Fruit({name: 'Apple'}));
fruits.add(new Fruit({name: 'Banana'}));
fruits.add(new Fruit({name: 'Grape'}));

var view = new FruitsView({
  el: $('#list'),
  collection: fruits
});

view.render();

$('#button-add').click(function() {
  fruits.add(new Fruit({name: 'Orange'}));
});

setInterval(function() {
  $('#debug').val(JSON.stringify(fruits.toJSON(), null, 2));
}, 100);
