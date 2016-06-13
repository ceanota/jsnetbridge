/// <reference path="todo.model.js" />

window.todoApp = window.todoApp || {};

window.todoApp.datacontext = (function () {

    var datacontext = {};

    function getTodoLists(todoListsObservable, errorObservable) {

        //#region "private"
        function getSucceeded(data) {
            /// <param name="data" type="$dpUrlSet.$apiTodoList.GetTodoLists.$action0.$Return"></param>
            
            var mappedTodoLists = $.map(data, function (list) { return new createTodoList(list); });
            todoListsObservable(mappedTodoLists);
        }

        function getFailed() {
            errorObservable("Error retrieving todo lists.");
        }
        //#endregion

        var settings = _getAjaxSettings(null, $dpUrlSet.$apiTodoList.GetTodoLists.$action0);

        var xhr = $.ajax(settings)
            .done(getSucceeded)
            .fail(getFailed);

        return xhr;
    }

    function createTodoItem(data) {
        /// <param name="data" type="$dpLib.SingleAppExample.Models.TodoItemDto"></param>
        
        return new todo_model.todoItem(data); // todoItem is injected by todo.model.js
    }

    function createTodoList(data) {
        /// <param name="data" type="$dpUrlSet.$apiTodoList.GetTodoLists.$action0.$Return"></param>
        
        return new todo_model.todoList(data); // todoList is injected by todo.model.js
    }

    function saveNewTodoItem(todoItem) {
        /// <param name="todoItem" type="todo_model.todoItem"></param>
        
        
        clearErrorMessage(todoItem);

        var settings = _getAjaxSettings(todoItem, $dpUrlSet.$apiTodo.PostTodoItem.$action0);

        var xhr = $.ajax(settings);
        xhr.done(function (result) {
            /// <param name="result" type="$dpLib.SingleAppExample.Models.TodoItem"></param>
            todoItem.todoItemId = result.TodoItemId;
        });
        xhr.fail(function () {
            todoItem.errorMessage("Error adding a new todo item.");
        });

        return xhr;

    }

    function saveNewTodoList(todoList) {
        /// <param name="todoList" type="todo_model.todoList"></param>
        
        clearErrorMessage(todoList);

        var settings = _getAjaxSettings(todoList, $dpUrlSet.$apiTodoList.PostTodoList.$action0);

        var xhr = $.ajax(settings);
        xhr.done(function (result) {
            /// <param name="result" type="$dpLib.SingleAppExample.Models.TodoListDto"></param>

            todoList.todoListId = result.TodoListId;
            todoList.userId = result.UserId;
        });
        xhr.fail(function () {
            todoItem.errorMessage("Error adding a new todo list.");
        });

        return xhr;
    }

    function deleteTodoItem(todoItem) {
        
        var settings = _getAjaxSettings(null, $dpUrlSet.$apiTodo.DeleteTodoItem.$action0, todoItem.todoItemId);

        var xhr = $.ajax(settings);
        xhr.fail(function () {
            todoItem.errorMessage("Error removing todo item.");
        });
        return xhr;
    }

    function deleteTodoList(todoList) {
        /// <param name="todoList" type="todo_model.todoList"></param>
        
        var settings = _getAjaxSettings(null, $dpUrlSet.$apiTodoList.DeleteTodoList.$action0, todoList.todoListId);

        var xhr = $.ajax(settings);
        xhr.fail(function () {
            todoList.errorMessage("Error removing todo list.");
        });
        return xhr;
    }

    function saveChangedTodoItem(todoItem) {
        /// <param name="todoItem" type="todo_model.todoItem"></param>
        clearErrorMessage(todoItem);
        
        var options = _getAjaxSettings(todoItem, $dp.$JsNet.$UrlSet.$apiTodo.PutTodoItem.$action0, todoItem.todoItemId);

        return $.ajax(options)
            .fail(function () {
                todoItem.errorMessage("Error updating todo item.");
            });

    }

    function saveChangedTodoList(todoList) {
        /// <param name="todoList" type="todo_model.todoList"></param>
        clearErrorMessage(todoList);

        var options = _getAjaxSettings(todoList, $dp.$JsNet.$UrlSet.$apiTodoList.PutTodoList.$action0, todoList.todoListId);
        options.dataType = "text";
        
        return $.ajax(options)
            .fail(function () {
                todoList.errorMessage("Error updating the todo list title. Please make sure it is non-empty.");
            });
    }


    //#region "Private"
    function clearErrorMessage(entity) { entity.errorMessage(null); }

    function _getAjaxSettings(data, action, id) {
        /// <summary></summary>
        /// <param name="data" type="Object"></param>
        /// <param name="action" type="$dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory"></param>
        /// <param name="id" type="String"></param>

        var options = action.$AjaxSettings();

        if (id) {
            options.url = action.$GetUrl({ id: id });
        } else {
            options.url = action.$GetUrl();
        }

        options.type = action.$httpMethodArray.$first;

        options.data = data ? data.toJson() : null;

        var antiForgeryToken = $("#antiForgeryToken").val();
        if (antiForgeryToken) {
            options.headers = {
                'RequestVerificationToken': antiForgeryToken
            }
        }

        return options;
    }
    //#endregion

    //#region "Public"
    datacontext.getTodoLists = getTodoLists;
    datacontext.createTodoItem = createTodoItem;
    datacontext.createTodoList = createTodoList;
    datacontext.saveNewTodoItem = saveNewTodoItem;
    datacontext.saveNewTodoList = saveNewTodoList;
    datacontext.saveChangedTodoItem = saveChangedTodoItem;
    datacontext.saveChangedTodoList = saveChangedTodoList;
    datacontext.deleteTodoItem = deleteTodoItem;
    datacontext.deleteTodoList = deleteTodoList;
    //#endregion


    return datacontext;


})();