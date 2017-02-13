angular.module('app.dataPage',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name:"index.data",
    url:'/data',
    templateUrl:'src/views/data/data.html',
    controller:'dataCtl'
  })
})
    .controller('dataCtl',function($scope,$state,$stateParams){

      })

