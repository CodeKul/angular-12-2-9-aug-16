angular.module('codekul',['module2'])
  .controller('MyController',['webService','webCall',function MyController(web,call) {
  this.myClick = function () {
    if(this.myName == 'Ani' && this.myTopic == 'Android'){
      this.intrest = 'Mobile';
    }
  };
  this.faceBook = function () {
    this.res = web.fb();
  }
  this.gPlus = function () {
    this.res = web.gPlus();
  }
  this.call = function () {
    this.res = call.call();
  }

}]).controller('ScopeController',['$scope',function (scp) {
  scp.hello = 'Hi I m in scope';
  scp.double = function (val) {
    scp.doubleVal = val * val;
  };
}]).controller('ParentController',['$scope',function(scp){
  scp.parentState = 'Parent';
}]).controller('ChildController',['$scope',function(scp){
  scp.parentState = 'Child->Parent';
  scp.childState = 'Child';
}])
.controller('SimpleController',['$scope','simpleFactory',function SimpleController(scp,simpleFactory) {
  scp.show = function (msg) {
    simpleFactory(msg);
  };
}]);
