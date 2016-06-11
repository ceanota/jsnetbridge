
window.todoApp = window.todoApp || {};

window.todoApp.datacontext = (function () {

    var datacontext = {};

    function getTodoLists(todoListsObservable, errorObservable) {

        //#region "private"
        function getSucceeded(data) {
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
        return new datacontext.todoItem(data); // todoItem is injected by todo.model.js
    }
    function createTodoList(data) {
        return new datacontext.todoList(data); // todoList is injected by todo.model.js
    }
    function saveNewTodoItem(todoItem) {
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

        debugger;
        var settings = _getAjaxSettings(todoList, $dpUrlSet.$apiTodoList.PostTodoList.$action0);

        var xhr = $.ajax(settings);
        xhr.done(function (result) {
            todoList.todoListId = result.todoListId;
            todoList.userId = result.userId;
        });
        xhr.fail(function () {
            todoItem.errorMessage("Error adding a new todo item.");
        });

        return xhr;


        //return ajaxRequest("post", todoListUrl(), todoList)
        //    .done(function (result) {
        //        todoList.todoListId = result.todoListId;
        //        todoList.userId = result.userId;
        //    })
        //    .fail(function () {
        //        todoList.errorMessage("Error adding a new todo list.");
        //    });
    }
    function deleteTodoItem(todoItem) {
        return ajaxRequest("delete", todoItemUrl(todoItem.todoItemId))
            .fail(function () {
                todoItem.errorMessage("Error removing todo item.");
            });
    }
    function deleteTodoList(todoList) {
        return ajaxRequest("delete", todoListUrl(todoList.todoListId))
            .fail(function () {
                todoList.errorMessage("Error removing todo list.");
            });
    }
    function saveChangedTodoItem(todoItem) {
        clearErrorMessage(todoItem);

        var action = $dp.$JsNet.$UrlSet.$apiTodo.PutTodoItem.$action0;
        var options = _getAjaxSettings(todoItem, action, todoItem.todoItemId);

        return $.ajax(options)
            .fail(function () {
                todoItem.errorMessage("Error updating todo item.");
            });

    }
    function saveChangedTodoList(todoList) {
        clearErrorMessage(todoList);
        return ajaxRequest("put", todoListUrl(todoList.todoListId), todoList, "text")
            .fail(function () {
                todoList.errorMessage("Error updating the todo list title. Please make sure it is non-empty.");
            });
    }


    // Private
    function clearErrorMessage(entity) { entity.errorMessage(null); }
    function ajaxRequest(type, url, data, dataType) { // Ajax helper
        var options = {
            dataType: dataType || "json",
            contentType: "application/json",
            cache: false,
            type: type,
            data: data ? data.toJson() : null
        };
        var antiForgeryToken = $("#antiForgeryToken").val();
        if (antiForgeryToken) {
            options.headers = {
                'RequestVerificationToken': antiForgeryToken
            }
        }



        return $.ajax(url, options);
    }

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

    // routes
    function todoListUrl(id) {
        return "/api/todolist/" + (id || "");
    }
    function todoItemUrl(id) { return "/api/todo/" + (id || ""); }


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