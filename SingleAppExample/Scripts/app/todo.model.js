(function (ko, datacontext) {
    debugger;

    if (window.todo_model) { return; }
    window.todo_model = window.todo_model || {};

    function todoItem(data) {
        /// <param name="data" type="$dpLib.SingleAppExample.Models.TodoItemDto"></param>

        debugger;
        var self = this;
        data = data || {};

        // Persisted properties
        self.todoItemId = data.TodoItemId;
        self.title = ko.observable(data.Title);
        self.isDone = ko.observable(data.IsDone);
        self.todoListId = data.TodoListId;

        // Non-persisted properties
        self.errorMessage = ko.observable();

        saveChanges = function () {
            return datacontext.saveChangedTodoItem(self);
        };

        // Auto-save when these properties change
        self.isDone.subscribe(saveChanges);
        self.title.subscribe(saveChanges);

        self.toJson = function () { return ko.toJSON(self) };
    };

    function todoList(data) {
        /// <param name="data" type="$dpLib.SingleAppExample.Models.TodoListDto"></param>
        debugger;
        var self = this;
        data = data || {};

        // Persisted properties
        self.todoListId = data.TodoListId;
        self.userId = data.UserId || "to be replaced";
        self.title = ko.observable(data.Title || "My todos");
        self.todos = ko.observableArray(importTodoItems(data.Todos));

        // Non-persisted properties
        self.isEditingListTitle = ko.observable(false);
        self.newTodoTitle = ko.observable();
        self.errorMessage = ko.observable();

        self.deleteTodo = function () {
            var todoItem = this;
            return datacontext.deleteTodoItem(todoItem)
                 .done(function () { self.todos.remove(todoItem); });
        };

        // Auto-save when these properties change
        self.title.subscribe(function () {
            return datacontext.saveChangedTodoList(self);
        });

        self.toJson = function () { return ko.toJSON(self) };
    };
    // convert raw todoItem data objects into array of TodoItems
    function importTodoItems(todoItems) {
        /// <returns value="[new todoItem()]"></returns>
        return $.map(todoItems || [],
                function (todoItemData) {
                    return datacontext.createTodoItem(todoItemData);
                });
    }

    todoList.prototype.addTodo = function () {
        /// <summary>called in cshtml.</summary>
        var self = this;
        if (self.newTodoTitle()) { // need a title to save

            var empty = $dpLib.SingleAppExample.Models.TodoItem();
            empty.Title = self.newTodoTitle();
            empty.TodoListId = self.todoListId;

            var todoItem = datacontext.createTodoItem(empty);
            self.todos.push(todoItem);
            datacontext.saveNewTodoItem(todoItem);
            self.newTodoTitle("");
        }
    };

    todo_model.todoItem = todoItem;
    todo_model.todoList = todoList;

    //datacontext.todoItem = todoItem;
    //datacontext.todoList = todoList;

})(ko, todoApp.datacontext);