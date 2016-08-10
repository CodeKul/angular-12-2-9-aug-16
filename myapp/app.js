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

}]);
