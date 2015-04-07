/**
 * Created by Hosuke on 7/04/15.
 */

var teaApp = angular.module(
    'teaApp',[
        'ui.router',
        'header',
        'home'
        //'feedback'
    ]
)
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('tea', {
                url: '/',
                views: {
                    'header@': {
                        templateUrl: 'app/header/header.tmpl.html',
                        controller: 'HeaderController'
                    }
                },
                abstract: true
            });
        $urlRouterProvider.otherwise('/home');
    });