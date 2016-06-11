﻿
window.todoApp = window.todoApp || {};

window.todoApp.datacontext = (function () {

    var datacontext = {};

    function getTodoLists(todoListsObservable, errorObservable) {

        //#region "private"
        function getSucceeded(data) {
            /// <summary></summary>
            /// <param name="data" type="$dpUrlSet.$apiTodoList.GetTodoLists.$action0.$Return().$dpItemFactory"></param>
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
        debugger;
        return new datacontext.todoItem(data); // todoItem is injected by todo.model.js
    }
    function createTodoList(data) {
        /// <summary></summary>
        /// <param name="data" type="$dpUrlSet.$apiTodoList.GetTodoLists.$action0.$Return().$dpItemFactory"></param>

        return new datacontext.todoList(data); // todoList is injected by todo.model.js
    }
    function saveNewTodoItem(todoItem) {
        debugger;
        clearErrorMessage(todoItem);

        var settings = _getAjaxSettings(todoItem, $dpUrlSet.$apiTodo.PostTodoItem.$action0);

        var xhr = $.ajax(settings);
        xhr.done(function (result) {
            todoItem.todoItemId = result.todoItemId;
        });
        xhr.fail(function () {
            todoItem.errorMessage("Error adding a new todo item.");
        });

        return xhr;

    }
    function saveNewTodoList(todoList) {
        clearErrorMessage(todoList);

        var settings = _getAjaxSettings(todoList, $dpUrlSet.$apiTodoList.PostTodoList.$action0);

        var xhr = $.ajax(settings);
        xhr.done(function (result) {
            todoList.todoListId = result.todoListId;
            todoList.userId = result.userId;
        });
        xhr.fail(function () {
            todoItem.errorMessage("Error adding a new todo list.");
        });

        return xhr;
    }

    function deleteTodoItem(todoItem) {
        debugger;
        var settings = _getAjaxSettings(null, $dpUrlSet.$apiTodo.DeleteTodoItem.$action0, todoItem.todoItemId);

        var xhr = $.ajax(settings);
        xhr.fail(function () {
            todoItem.errorMessage("Error removing todo item.");
        });
        return xhr;
    }
    function deleteTodoList(todoList) {

        debugger;
        var settings = _getAjaxSettings(null, $dpUrlSet.$apiTodoList.DeleteTodoList.$action0, todoList.todoListId);

        var xhr = $.ajax(settings);
        xhr.fail(function () {
            todoList.errorMessage("Error removing todo list.");
        });
        return xhr;
    }
    function saveChangedTodoItem(todoItem) {
        clearErrorMessage(todoItem);
        debugger;
        var options = _getAjaxSettings(todoItem, $dp.$JsNet.$UrlSet.$apiTodo.PutTodoItem.$action0, todoItem.todoItemId);

        return $.ajax(options)
            .fail(function () {
                todoItem.errorMessage("Error updating todo item.");
            });

    }
    function saveChangedTodoList(todoList) {
        clearErrorMessage(todoList);

        var options = _getAjaxSettings(todoList, $dp.$JsNet.$UrlSet.$apiTodoList.PutTodoList.$action0, todoList.todoListId);
        options.dataType = "text";
        debugger;
        return $.ajax(options)
            .fail(function () {
                todoList.errorMessage("Error updating the todo list title. Please make sure it is non-empty.");
            });
    }


    // Private
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