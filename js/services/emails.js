app.factory('emails', ['$http', function($http) {
  return $http.get('/data')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);