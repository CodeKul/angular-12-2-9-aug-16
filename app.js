angular.module('codekul',['module2'])
.config([function() {
  console.log("Simple Factory config");
}])
.run(['$log',function (log) {
    log.info("hello");
}])
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
}])
.controller('StrcitDIController', function (simpleFactory) {

})
.controller('WatchController',['$scope',function WatchController(scp) {

  scp.count = 10;
  scp.$watch('count',function () {
    console.log(''+scp.count);
  });

  scp.callForWatch = function () {
    scp.count += scp.count;
  };
}])
.controller('ApplyController',['$scope',function ApplyController(scp) {

  scp.myApply = 0;

  document.getElementById('myBtn').addEventListener('click', function () {
      scp.myApply = new Date();
      scp.$apply(function () {
        console.log("called");
      });
  });
}])
.controller('ExpressionController',['$scope',function ExpressionController(scp) {

  scp.myFun = function (ev) {
      scp.ev = new Date();
  };
}])
.controller('InterpolationController',['$scope',function InterpolationController(scp) {
}])
.controller('FilterController',[function FilterController() {
  this.cities = ['Pune','Mumbai','Nagpur','Kolhapur','Sangli','Delhi','Banglore'];
}])
.filter('filterLength',function () {
  return function (input,val,status) {
      if(input.length >= val && status) {
        return input;
      }
      if(!status)
      return input;
  };
});
