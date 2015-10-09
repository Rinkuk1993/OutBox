app.factory('emails', ['$http', function($http) {
  return $http.get('http://127.0.0.1:34343/data')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);