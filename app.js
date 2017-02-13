/**
 * Created by dell on 2017/2/10.
 */
angular.module('myApp',
    ["ui.router",
        "app.homePage",
        "app.dataPage",
       // "app.rankPage",
        "app.searchPage",
        "app.minePage",
         //"mainPage"
        "bangdanPage",
        "footerPage"
    ])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/index/home')
        $stateProvider
            .state({
                name:'index',
                url:'/index',
                //css:'style.css',
                templateUrl:'src/views/footer/footer.html',
               // controller:"indexCtl"
            })

            .state({
                name:'main',
                url:'/main',
                templateUrl:'src/views/main/main.html',
                //controller:"mainCtl"
            })
    })