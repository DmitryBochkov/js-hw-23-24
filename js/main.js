require.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    'Model',
    'View',
    'Controller',
    'jquery'
  ],
  function(Model, View, Controller, $) {
    var firstToDoList = ['My new task 1', 'My new task 2', 'My new task 3'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
  }
);
