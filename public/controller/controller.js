angular
    .module('bookingApp')
    .controller('bookingController', function(bookingService) {
      var vm = this;
      vm.user = {};
      vm.users = [];
      vm.addUser = function() {
        console.log("controlle calling" + vm.user);
        bookingService.saveUser(vm.user);
      }

    });
