angular.module('todoManager', [])
    .controller('todoManagerCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.getList = function () {

            //-- action method.
            var action = $dpUrlSet.$apiWS_Todo.GetUserTodoItems.$action0;

            //-- ajax settings.
            var ajaxset = action.$AjaxSettings();

            $http[ajaxset.method](ajaxset.url)
                .success(function (data, status, headers, config) {
                    $scope.todoList = data;
                });
        }

        $scope.postItem = function () {

            if ($scope.newTaskText != '') {

                //-- action method.
                var action = $dpUrlSet.$apiWS_Todo.PostTodoItem.$action0;

                //-- ajax settings
                var ajaxset = action.$AjaxSettings();

                //-- data.
                ajaxset.data.item.task = $scope.newTaskText;

                $http[ajaxset.method](ajaxset.url, ajaxset.data.item)
                    .success(function (data, status, headers, config) {
                        $scope.newTaskText = '';
                        $scope.getList();
                    });
            }
        }

        $scope.complete = function (index) {

            //-- action method.
            var action = $dpUrlSet.$apiWS_Todo.CompleteTodoItem.$action0;

            //-- ajax settings.
            var ajaxset = action.$AjaxSettings();

            //-- complete url
            var completeUrl = ajaxset.url + '/' + $scope.todoList[index].id;

            $http[ajaxset.method](completeUrl)
                .success(function (data, status, headers, config) {
                    $scope.getList();
                });
        }

        $scope.delete = function (index) {

            //-- action method.
            var action = $dpUrlSet.$apiWS_Todo.DeleteTodoItem.$action0;

            //-- ajax settings.
            var ajaxset = action.$AjaxSettings();

            //-- complete url
            var completeUrl = ajaxset.url + '/' + $scope.todoList[index].id;

            $http[ajaxset.method](completeUrl)
                .success(function (data, status, headers, config) {
                    $scope.getList();
                });
        }

        //Get the current user's list when the page loads.
        $scope.getList();
    }]);