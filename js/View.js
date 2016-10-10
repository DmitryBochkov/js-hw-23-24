define(
  'View',
  ['jquery', 'tmpl'],
  function() {
    function View(model) {
      var self = this;

      function init() {
        var wrapper = tmpl($('#wrapper-template').html());

        $('body').append(wrapper);
        self.elements = {
          input: $('.inp_item-value'),
          addBtn: $('.btn_add-item'),
          editBtn: $('.btn_edit-todo'),
          saveBtn: $('.btn_save-todo'),
          listContainer: $('.todo-item-list')
        };
        self.renderList(model.data);
      };

      self.renderList = function(data) {
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
      };

      init();
    }
    return View;
  }
);
