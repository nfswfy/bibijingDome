/**
 * Created by dell on 2017/2/9.
 */
angular.module('bangdanPage',[])
    .config(function($stateProvider){
        $stateProvider
            .state({
            name:'main.renqi',
            url:'/renqi',
            params:{
                id:0
            },
            templateUrl:'src/views/rank/rank.html',
            controller:'renqiCtl'
        })
            .state('main.haopin',{
                url:'/haopin',
                params:{
                    id:0
                },
                templateUrl:'src/views/rank/rank.html',
                controller:'haopinCtl'
            })
            .state('main.jianjia',{
                url:'/jianjia',
                params:{
                    id:0
                },
                templateUrl:'src/views/rank/rank.html',
                controller:'jianjiaCtl'
            })
            .state('main.pinpai',{
                url:'/pinpai',
                params:{
                    id:0
                },
                templateUrl:'src/views/rank/rank.html',
                controller:'pinpaiCtl'
            })
            .state('main.wanghong',{
                url:'/wanghong',
                params:{
                    id:0
                },
                templateUrl:'src/views/rank/rank.html',
                controller:'wanghongCtl'
            })
            .state('main.mingxing',{
                url:'/mingxing',
                params:{
                    id:0
                },
                templateUrl:'src/views/rank/rank.html',
                controller:'mingxingCtl'
            })
            .state('main.xiaoliang',{
                url:'/xiaoliang',
                params:{
                    id:0
                },
                templateUrl:'src/views/rank/rank.html',
                controller:'xiaoliangCtl'
            })
            .state('main.zonghe',{
                url:'/zonghe',
                params:{
                    id:0
                },
                templateUrl:'src/views/rank/rank.html',
                controller:'zongheCtl'
            })
    })
    .controller('renqiCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        //$("footer").hide();
        $scope.bd="人气";
        $http.get("src/views/rank/list.json").success(function (dat) {
            $scope.data=printObject.getdata(dat.服饰.女装)
        });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    .controller('haopinCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        $scope.bd="好评";
        $("footer").hide();
        // $http.get("src/views/rank/list.json").success(function (dat) {
        //     $scope.data=printObject.getdata(dat.服饰.女装)
        // });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    .controller('jianjiaCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        $scope.bd="降价";
        $http.get("src/views/rank/list.json").success(function (dat) {
            $scope.data=printObject.getdata(dat.服饰.女装)
        });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    .controller('pinpaiCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        $scope.bd="品牌";
        $http.get("src/views/rank/list.json").success(function (dat) {
            $scope.data=printObject.getdata(dat.服饰.女装)
        });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    .controller('wanghongCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        $scope.bd="网红";
        $http.get("src/views/rank/list.json").success(function (dat) {
            $scope.data=printObject.getdata(dat.服饰.女装)
        });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    .controller('mingxingCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        $scope.bd="明星";
        $http.get("src/views/rank/list.json").success(function (dat) {
            $scope.data=printObject.getdata(dat.服饰.女装)
        });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    .controller('xiaoliangCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        $scope.bd="销量";
        $http.get("src/views/rank/list.json").success(function (dat) {
            $scope.data=printObject.getdata(dat.服饰.女装)
        });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    .controller('zongheCtl',function($scope,$state,$stateParams,$http,printObject,phbsx){
        $scope.bd="综合";
        $http.get("src/views/rank/list.json").success(function (dat) {
            $scope.data=printObject.getdata(dat.服饰.女装)
        });
        $http.get('src/views/rank/fushi.json').success(function (res) {
            $scope.show=res.女装.女装T恤;
        });
        $scope.listcont=function (iname) {
            $http.get('src/views/rank/fushi.json').success(function (res) {
                $scope.show=printObject.getlistdata(res,iname);
            });
        };
        phbsx.phban();
        phbsx.phbqx();
    })
    //商品种类选择列表
    .service('printObject',function () {
        this.getdata=function (obj) {
            var listArr=[];
            var i;
            for( i in obj){//用javascript的for/in循环遍历对象的属性
                var arr={};
                arr.id=i;
                arr.name=obj[i];
                listArr.push(arr);
            }
            return listArr;
        }
        this.getlistdata=function (res,iname) {
            var listarr=[];
            var listArr=[];
            for(a in res.女装){
                listarr.push(a);
                listArr.push(res.女装[a]);
            }
            for(var i=0;i<listArr.length;i++){
                if(iname==listarr[i]){
                    return listArr[i]
                }
            }
        }

    })
    //控制排行榜上下
    .service('phbsx',function () {
        //排行榜出
        this.phban=function () {
            $(".phb_an").on("click",function () {
                $(".phb_an").hide();
                $(".phb_menu").show(500)
            })
        }
        //排行榜回
        this.phbqx=function () {
            $(".phb_qx").on("click",function () {
                $(".phb_an").show(1000);
                $(".phb_menu").hide()
            })
        }
    })
    //排行榜list内容选择器
    .service('listcont',function () {

    })