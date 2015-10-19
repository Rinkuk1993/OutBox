app.factory('emails', ['$http', function($http) {
  return $http.get('http://localhost:5000/data')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);