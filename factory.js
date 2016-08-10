angular.module('module2',[])// if you are registering module make sure that you will provide empty rect braces
.controller('OtherController',function OtherController() {
  this.otherClick = function () {
      this.date = new Date();
  };
}).
factory('webService',function webService() {
  return {
    fb : function(){
      console.log('fb api');
      return 'fb api';
    },
    gPlus : function () {
      console.log("g+ api");
      return 'g+ api';
    }
  }
})
.factory ('webCall', ['$http', function webCall(http) {
    var url = 'http://192.168.0.13:7171/bappa/bappa';
    var call = function () {
      return http.get(url).then(function(response) {
        console.log(""+response);
        return response.data;
      });
    };
    return {
      call : call
    }
}]);
