angular.module('register', [])
    .controller('registerCtrl',['$scope','$http', function ($scope, $http) {
        $scope.register = function()
        {
            //-- action method
            var action = $dpUrlSet.$apiAccount.Register.$action0;
            var ajaxset = action.$AjaxSettings();

            //-- parameter.
            ajaxset.data.model.Email = $scope.username;
            ajaxset.data.model.Password = $scope.password1;
            ajaxset.data.model.ConfirmPassword = $scope.password2;

            //-- ajax
            $http[ajaxset.method](ajaxset.url, ajaxset.data.model)
            .success(function (data, status, headers, config) {
                $scope.successMessage = "Registration Complete.  Please check your email for account activation instructions.";
                $scope.showErrorMessage = false;
                $scope.showSuccessMessage = true;
            })
            .error(function (data, status, headers, config) {
                if (angular.isArray(data))
                    $scope.errorMessages = data;
                else
                    $scope.errorMessages = new Array(data.replace(/["']{1}/gi, ""));

                $scope.showSuccessMessage = false;
                $scope.showErrorMessage = true;
            });
        }

        $scope.showAlert = false;
        $scope.showSuccess = false;
    }]);