angular
    .module('bookingApp')
    .controller('bookingController', function(bookingService) {
      var vm = this;
      vm.user = {};
      vm.users = [];
      //Demo comment
      vm.addUser = function() {
        console.log("controlle calling" + vm.user);
        bookingService.saveUser(vm.user);
      }

    });
