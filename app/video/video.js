angular.module('video', [])
    .config(function ($stateProvider){
        $stateProvider
            .state('tea.video', {
                url: 'video',
                views: {
                    'header@': {
                        templateUrl: 'app/header/header.tmpl.html',
                        controller: 'HeaderController'
                    },
                    "main@": {
                        templateUrl: 'app/video/video.tmpl.html',
                        controller: 'VideoController'
                    }
                }
            });
    })
    .controller("VideoController", function(){

    });