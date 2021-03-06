var helpers = require('../helpers');

angular.module(MODULE_NAME)
.factory('socket', ['$rootScope', function ($rootScope) {
  var socket = io(helpers.getUrl() + helpers.getNamespace(), {path: helpers.getLocation() + '/socket.io', secure: true});
  console.log(socket);

  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
}]);
