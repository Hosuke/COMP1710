/**
 * Created by Hosuke on 7/04/15.
 */
angular.module('feedback', [])
    .config(function ($stateProvider){
        $stateProvider
            .state('tea.feedback', {
                url: 'feedback',
                views: {
                    'header@': {
                        templateUrl: 'app/header/header.tmpl.html',
                        controller: 'HeaderController'
                    },
                    "main@": {
                        templateUrl: 'app/feedback/feedback.tmpl.html',
                        controller: 'FeedbackController'
                    }
                }
            });
    })
    .controller("FeedbackController", function(){

    });