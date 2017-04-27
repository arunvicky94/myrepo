angular
    .module('bookingApp')
    .service('bookingService', function($http) {
        this.saveUser = function(user) {
          console.log("service calling" + user);
          return $http.post('/api/user', user);
        }
    });
