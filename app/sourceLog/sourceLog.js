/**
 * Created by Hosuke on 8/04/15.
 */

angular.module('sourcelog', [])
    .config(function ($stateProvider){
        $stateProvider
            .state('tea.sourcelog', {
                url: 'sourcelog',
                views: {
                    'header@': {
                        templateUrl: 'app/header/header.tmpl.html',
                        controller: 'HeaderController'
                    },
                    "main@": {
                        templateUrl: 'app/sourceLog/sourceLog.tmpl.html',
                        controller: 'SourceLogController'
                    }
                }
            });
    })
    .controller("SourceLogController", function(){

    });